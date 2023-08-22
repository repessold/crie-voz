import { Component, OnInit } from '@angular/core';
import { InfoElevenService } from 'src/app/core/services/info-eleven.service';

@Component({
  selector: 'app-generate-voice',
  templateUrl: './generate-voice.component.html',
  styleUrls: ['./generate-voice.component.css']
})
export class GenerateVoiceComponent implements OnInit {

  models!:string;

  constructor(
    private infoElevenService:InfoElevenService
  ) { }

  ngOnInit() {}

  getModels(){
    this.infoElevenService.getAllModels().then(response=> {
      this.models= response.data.models;
    })
    .catch(error => {
      console.log(error);
    });

  }

//   // Define a function called textToSpeech that takes in a string called inputText as its argument.
// const textToSpeech = async (inputText: any) => {
//   // Set the API key for ElevenLabs API.
//   // Do not use directly. Use environment variables.
//   const API_KEY = ELEVEN_LABS_API_KEY;
//   // Set the ID of the voice to be used.
//   const VOICE_ID = '21m00Tcm4TlvDq8ikWAM';

//   // Set options for the API request.
//   const options = {
//     method: 'POST',
//     url: `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
//     headers: {
//       accept: 'audio/mpeg', // Set the expected response type to audio/mpeg.
//       'content-type': 'application/json', // Set the content type to application/json.
//       'xi-api-key': `${API_KEY}`, // Set the API key in the headers.
//     },
//     data: {
//       text: inputText, // Pass in the inputText as the text to be converted to speech.
//     },
//     responseType: 'arraybuffer', // Set the responseType to arraybuffer to receive binary data as response.
//   };

//   // Send the API request using Axios and wait for the response.
//   const speechDetails = await HttpClient.request(options);

//   // Return the binary audio data received from the API response.
//   return speechDetails.data;
// };

// // Export the textToSpeech function as the default export of this module.
// export: any default textToSpeech;



}
