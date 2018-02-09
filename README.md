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

  To provide persistent playback, a slice of the global store was created that holds the currently playing track. This slice of state can be updated by other views to control things such as pausing, seeking, and changing tracks. 
  
## Waveform Generation 
 
 


#
 #### Full List of Libraries and Tools Used    
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
