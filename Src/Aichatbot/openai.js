import axios from 'axios';

const { apiKey } = require("./demodata");

const client = axios.create({
    headers:{
        "Authorization " : "Bearer "+ apiKey,
        "Content-Type": "application/json"
    }
})

const chagptendpoint = "https://api.openai.com/v1/chat/completions";
const dallEendpoint = "https://api.openai.com/v1/images/generations";


export const apicall = async(prompt , messages ) => {
    try{

        const res = await client.post(chagptendpoint , {
            model: 'gpt-3.5-turbo',
            messages: [
            {
             role: 'user',
             content: `Does this message want to generate an AI picture, image, art or anything similar? ${prompt} . Simply answer with a yes or no.`
            },
        ]
        })

        console.log('data : ' , res.data);


     
    }catch(err){
        console.log("error : " ,  err)
        


        return Promise.resolve({success:false , msg: err.message})
    }
}


export const getTranslatedText = params => {
    console.log('params', params);
    const request = {
      method: 'POST',
      headers: new Headers({
        Authorization:
          'Bearer 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',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(params),
    };
    console.log('params', request);
    return fetch('https://api.openai.com/v1/chat/completions', request);
  };

  recognizeLanguage = async text => {
    this.setState({
      recognizing: true,
    });
    let textOb = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'System provides ISO-639-3 name for given text.',
        },
        {role: 'user', content: 'goodbye'},
        {role: 'assistant', content: 'eng'},
        {role: 'user', content: 'अलविदा'},
        {role: 'assistant', content: 'hin'},
        {role: 'user', content: '元気ですか?'},
        {role: 'assistant', content: 'jpn'},
        {role: 'user', content: 'Comment allez-vous?'},
        {role: 'assistant', content: 'fra'},
        {role: 'user', content: '再见'},
        {role: 'assistant', content: 'zho'},
        {role: 'user', content: '拜拜'},
        {role: 'assistant', content: 'yue'},
        {role: 'user', content: text},
      ],
    };
    var statusCode;
    getTranslatedText(textOb)
      .then(responseJson => {
        statusCode = responseJson.status;
        return responseJson.json();
      })
      .then(res => {
        this.setState({
          recognizing: false,
        });
        if (statusCode == 200) {
          // console.log(res);
          var lan = res?.choices[0].message.content;
          // console.log(language, lan);
          var languageIndex = language.findIndex(({code3}) => code3 === lan);
          var languageOb = language[languageIndex];
          if (languageOb != undefined) {
            let translateOb = {
              model: 'gpt-3.5-turbo',
              messages: [
                {
                  role: 'user',
                  content: `Translate the following ${
                    languageOb.name
                  } text to ${
                    language[this.state.translatedLanguage].name
                  }: ${text}`,
                },
              ],
            };
            this.setState({
              translatingLanguage: languageIndex,
            });
            this.getTranslation(translateOb);
          } else {
            var chatData = this.state.chatData;
            var ob = {
              role: 'assistance',
              content: 'recognized language not available for translation',
              language: null,
            };
            chatData.push(ob);
            this.setState({
              clipRecorded: false,
              clipRecording: false,
              recordSecs: 0,
              recordTime: '00:00:00',
              currentPositionSec: 0,
              currentDurationSec: 0,
              playTime: '00:00:00',
              duration: '00:00:00',
              recordPlay: 'start',
              chatData: chatData,
              ttsRun: null,
              inProcess: false,
            });
          }
        } else {
          Alert.alert(
            'Message',
            'something went wrong, Please try again later.',
          );
          this.setState({
            inProcess: false,
          });
        }
      })
      .catch(err => {
        // console.log(err);
        this.setState({
          inProcess: false,
        });
      });
  };