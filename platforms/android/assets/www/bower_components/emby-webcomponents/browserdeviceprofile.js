define(["browser"],function(e){function o(){if(r)return r;var o=[],i=document.createElement("video");i.canPlayType("video/webm").replace(/no/,"")&&o.push("webm"),i.canPlayType('audio/mp4; codecs="ac-3"').replace(/no/,"")&&o.push("ac3"),e.chrome&&o.push("mkv");var n=!0,a=navigator.userAgent.toLowerCase();return-1!=a.indexOf("firefox")&&-1==a.indexOf("windows")&&(n=!1),n&&o.push("h264"),document.createElement("audio").canPlayType("audio/aac").replace(/no/,"")&&o.push("aac"),document.createElement("audio").canPlayType("audio/mp3").replace(/no/,"")&&o.push("mp3"),document.createElement("audio").canPlayType('audio/ogg; codecs="opus"').replace(/no/,"")&&o.push("opus"),document.createElement("audio").canPlayType("audio/webm").replace(/no/,"")&&o.push("webma"),document.createElement("audio").canPlayType("audio/flac").replace(/no/,"")&&o.push("flac"),r=o,o}function i(){return null==t&&(t=null!=document.createElement("video").textTracks),t}function n(){return null==d&&(d=null!=window.MediaSource||a()),d}function a(){var e=document.createElement("video");return e.canPlayType("application/x-mpegURL").replace(/no/,"")||e.canPlayType("application/vnd.apple.mpegURL").replace(/no/,"")?!0:!1}var r,t,d;return function(){var a=1e8,r=o(),t=-1!=r.indexOf("webm"),d=-1!=r.indexOf("ac3"),c=-1!=r.indexOf("mp3"),s=(-1!=r.indexOf("aac"),-1!=r.indexOf("mkv")),u={};u.MaxStreamingBitrate=a,u.MaxStaticBitrate=1e8,u.MusicStreamingTranscodingBitrate=Math.min(a,192e3),u.DirectPlayProfiles=[],-1!=r.indexOf("h264")&&u.DirectPlayProfiles.push({Container:"mp4,m4v",Type:"Video",VideoCodec:"h264",AudioCodec:"aac"+(c?",mp3":"")+(d?",ac3":"")}),e.chrome&&u.DirectPlayProfiles.push({Container:"mkv,mov",Type:"Video",VideoCodec:"h264",AudioCodec:"aac"+(c?",mp3":"")+(d?",ac3":"")}),["opus","mp3","aac","flac","webma"].forEach(function(e){-1!=r.indexOf(e)&&u.DirectPlayProfiles.push({Container:"webma"==e?"webma,webm":e,Type:"Audio"})}),t&&u.DirectPlayProfiles.push({Container:"webm",Type:"Video"}),u.TranscodingProfiles=[],["opus","mp3","aac"].forEach(function(e){-1!=r.indexOf(e)&&(u.TranscodingProfiles.push({Container:e,Type:"Audio",AudioCodec:e,Context:"Streaming",Protocol:"http"}),u.TranscodingProfiles.push({Container:e,Type:"Audio",AudioCodec:e,Context:"Static",Protocol:"http"}))}),s&&!e.mobile&&u.TranscodingProfiles.push({Container:"mkv",Type:"Video",AudioCodec:"aac"+(d?",ac3":""),VideoCodec:"h264",Context:"Streaming"}),n()&&u.TranscodingProfiles.push({Container:"ts",Type:"Video",AudioCodec:"aac"+(d?",ac3":""),VideoCodec:"h264",Context:"Streaming",Protocol:"hls"}),t&&u.TranscodingProfiles.push({Container:"webm",Type:"Video",AudioCodec:"vorbis",VideoCodec:"vpx",Context:"Streaming",Protocol:"http"}),u.TranscodingProfiles.push({Container:"mp4",Type:"Video",AudioCodec:"aac",VideoCodec:"h264",Context:"Streaming",Protocol:"http"}),u.TranscodingProfiles.push({Container:"mp4",Type:"Video",AudioCodec:"aac",VideoCodec:"h264",Context:"Static",Protocol:"http"}),u.ContainerProfiles=[],u.CodecProfiles=[],u.CodecProfiles.push({Type:"Audio",Conditions:[{Condition:"LessThanEqual",Property:"AudioChannels",Value:"2"}]});var l=e.safari?"2":"6";return u.CodecProfiles.push({Type:"VideoAudio",Codec:"aac",Container:"mkv,mov",Conditions:[{Condition:"NotEquals",Property:"AudioProfile",Value:"HE-AAC"},{Condition:"LessThanEqual",Property:"AudioChannels",Value:l},{Condition:"Equals",Property:"IsSecondaryAudio",Value:"false",IsRequired:"false"}]}),u.CodecProfiles.push({Type:"VideoAudio",Codec:"aac,mp3",Conditions:[{Condition:"LessThanEqual",Property:"AudioChannels",Value:l},{Condition:"Equals",Property:"IsSecondaryAudio",Value:"false",IsRequired:"false"}]}),u.CodecProfiles.push({Type:"VideoAudio",Conditions:[{Condition:"LessThanEqual",Property:"AudioChannels",Value:l},{Condition:"Equals",Property:"IsSecondaryAudio",Value:"false",IsRequired:"false"}]}),u.CodecProfiles.push({Type:"Video",Codec:"h264",Conditions:[{Condition:"NotEquals",Property:"IsAnamorphic",Value:"true",IsRequired:!1},{Condition:"EqualsAny",Property:"VideoProfile",Value:"high|main|baseline|constrained baseline"},{Condition:"LessThanEqual",Property:"VideoLevel",Value:"41"}]}),u.CodecProfiles.push({Type:"Video",Codec:"vpx",Conditions:[{Condition:"NotEquals",Property:"IsAnamorphic",Value:"true",IsRequired:!1}]}),u.SubtitleProfiles=[],i()&&u.SubtitleProfiles.push({Format:"vtt",Method:"External"}),u.ResponseProfiles=[],u.ResponseProfiles.push({Type:"Video",Container:"m4v",MimeType:"video/mp4"}),u.ResponseProfiles.push({Type:"Video",Container:"mov",MimeType:"video/webm"}),u}()});