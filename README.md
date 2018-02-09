# Song Stratus

Song Stratus is a implementation of core SoundCloud features developed over a 10 day period from scratch. The main tools used were Rails, PostgreSQL, React.js, Redux, and AWS S3 storage. This project is under active development and new features will continue to be added. 

## Features 

Account creation with back and front-end authentication using BCrypt.
  * Users can create accounts and log in / out 
  * Account content and changes are protected from unauthorized accouts 
  * Upload and change porfile pictures
  
 Upload songs and album artwork 
  
 Accurate realtime waveform generation of the uploaded songs
   *  Waveforms drawn using Canvas and several libraries off the audio data
 
 Persistent playback of audio files that follows you thruogh the site 
   * Ability to pause/play songs from either the footer player or main window and remain in sync 
   * Displays album art in footer for current track
   * Ability to seek in track 
    
View and play other users uploaded tracks 
 
Comment on tracks 

## Continous Media Playback 

<img src="https://i.imgur.com/ap3wa6u.jpg"/>

A player is always present in a footer bar, much like the navigation is always present. The nav bar, media player footer, and main content box are seperate react components, and when a user navigates the site it is only the main content box that either mounts a new component or renders. This also for a persistent player, but not for a persist song as the user will likely navigate away from the track they are playing to look at others. 

To provide persistent playback, a slice of the global store was created that holds the currently playing track. This slice of state can be updated by other views to control things such as pausing, seeking, and changing tracks. This is an example of the currentSong slice shape: 

```
{ currentSong: 
 { song: {id: 12, user_id: 4, title: "Where Do My Bluebirds Fly", etc...}
   played: True
   playing: 0.0983782712
 }
}
```

Both the Player component and the Song components that represent each track in the main view subscribe to this slice of state, and can stay in sync without having to maintain both local and global state -- both simply look to this slice to determine if they should be playing or not. 
  
## Waveform Generation 

<img src="https://imgur.com/8hcY3eJ.png"/>

The waveform is generated by extracting the audio data from the file using WebAudio, computing the webform in JavaScript, and rendering to the screen using Canvas. This was wrapped as a React component to be modular and flexible, and each waveform on the screen is this component simply reciving different arguments. This component also subscribes to the currentSong slice to keep its progress in sync -- if you pause the song, the waveform stops, etc. 
 
## Comments 

<img src="https://imgur.com/jTmPDs7.png"/>

On the individual song view, users can leave comments for that song. Simply typing in the comment box and pressing enter will post the comment, which will invoke a render of the comment index displaying the comments and instantly show the comment to the user. Comments are sorted by most recent. Each comment shows the user's profile picture and name, which link to that users profile. 

## Number of Comments, Timestamps and Play Count 

<img src="https://i.imgur.com/KdxuHyM.png"/>

For each song, SongStratus displays that songs number of comments and plays. To avoid the very inefficent process of requesting and then counting every comment for each song everytime it is displayed ```play_count``` and ```num_comments``` columns were added to the songs table. These variables are incremented in the Rails Controllers when the appropriate action is received, such as creating a comment. This result in virtually identical performance while providing the desired functionality. 

To provide timestamps on the comments and songs, the created_at date column for each item is converted to friendly english strings on the back end provided to the front end as part of that items data. 

## Full List of Libraries and Tools Used    
|       |    |  
| ------------- |:-------------:| 
| Javascript 6 (ES 2015)     | Rails 5.1 | 
|  Ruby 5.1.4    | React 16.2    |  
| Paperclip 5.2.1 | Figaro 1.1.1   |  
|React Player 1.1.1| Wavesurfer 1.4| 
| Lodash 4.17.4 | NPM 5.6 | 
| Babel 6.26 | Webpack 3.10 |
| Node 6.10.1   | PostgreSQL 10.1  |
| JBuilder 2.5   | BCrypt 3.1.7  |
| AWS S3 SDK 2.9 |  |

## Future Features 
* Comments attatched to the time in the song play back they were made and rendered over the waveform 
* Acurate loading progress bar that monitors XHR traffic 
* Render waveform on the back end using a C library and preload as song data improve performance
* Additional views to help with discovering music 
* Likes and Follows 
* Playlists 
* Song visualizer
* Dynamic Search 
