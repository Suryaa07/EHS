let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

let intro = ["Hello, welcome to the EHS system for our OEM company. How can I assist you today?"];
let namess=["My name is EHS Bot."];
let help = ["Please follow the safety protocols before you begin your work."];
let question = ["Do I need to wear PPE for this task?"];
let receiver= ["Yes, please wear the appropriate PPE for your task."];
let available = ["We have safety goggles, hard hats, and gloves available for use."];
let thank = ["You're welcome.", "No problem.", "My pleasure.", "Don't mention it.", "Thank you for using our EHS system."];
let closing = ["Goodbye.", "Take care.", "See you later."];
let safe = ['Wear personal protective equipments like helmet, jacket, googles, cloves etc to be safe in the workplace']
let fall_protection_precautions = ['Ensure that fall protection equipment is used when working at heights, and conduct regular safety inspections of elevated work areas.']
let confined_space_precautions = ['Provide proper training on working in confined spaces, and ensure that confined spaces are properly ventilated and monitored for hazards.']
let noise_precautions = ['Provide hearing protection when working in areas with high noise levels, and conduct regular noise monitoring to ensure compliance with regulations.']
let chemical_safety_precautions = ['Properly label and store chemicals, and provide appropriate PPE when working with hazardous chemicals.']
let ergonomics_precautions = ['Ensure that workstations are designed ergonomically and provide training on safe lifting and material handling.']
let machine_safety_precautions = ['Ensure that all guards and safety devices are in place and working properly before using any machinery.']
let electrical_safety_precautions = ['Do not touch electrical equipment with wet hands, and always unplug electrical equipment before servicing or repairing it.']
let fire_precautions = ['Ensure that fire exits are not blocked and fire extinguishers are available and in working condition. Conduct fire drills regularly.']
let sunburn_precaution=["Please apply sunscreen before going outside and wear a hat and protective clothing if possible. If you have a sunburn, please seek medical attention if necessary."];
let fever_precautions=["If you have a fever, please stay home and seek medical attention. If you must be on site, please wear a mask and maintain social distancing. You may take over-the-counter medications such as acetaminophen or ibuprofen, but please consult with a medical professional first."];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang="en-IN";

function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = " Wear personal protective equipments like helmet, jacket, googles, cloves etc to be safe in the workplace";

   


    if(message.includes("hai")||message.includes("hello")||message.includes("hay")||message.includes("hey")||message.includes("Aloha")||message.includes("Hi")||message.includes("Hi bot")){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes('safe')||message.includes('safety')||message.includes('safe')||message.includes('safer')){
        let finalresult = safe[Math.floor(Math.random() * safe.length)];
        speech.text = finalresult;
    }
    if(message.includes('fall')||message.includes('precautions')||message.includes('fall')||message.includes('protection')){
        let finalresult = fall_protection_precautions[Math.floor(Math.random() * fall_protection_precautions.length)];
        speech.text = finalresult;
    }
    if(message.includes('space')||message.includes('confined')||message.includes('space')||message.includes('training')){
        let finalresult =  confined_space_precautions[Math.floor(Math.random() * confined_space_precautions.length)];
        speech.text = finalresult;
    }
    
    if(message.includes('noise')||message.includes('level')){
        let finalresult =  noise_precautions[Math.floor(Math.random() * noise_precautions.length)];
        speech.text = finalresult;
    } 
    if(message.includes('chemicals')||message.includes('hazard')){
        let finalresult = chemical_safety_precautions[Math.floor(Math.random() * chemical_safety_precautions.length)];
        speech.text = finalresult;
    }
    if(message.includes('ergonomics')||message.includes('workstations')){
        let finalresult = ergonomics_precautions[Math.floor(Math.random() * ergonomics_precautions.length)];
        speech.text = finalresult;
    }
    if(message.includes('machine')||message.includes('guards')||message.includes('work')) {
        let finalresult = machine_safety_precautions[Math.floor(Math.random() * machine_safety_precautions.length)];
        speech.text = finalresult;
    }
    if(message.includes('electrical')||message.includes('wet')||message.includes('unplug')){
        let finalresult = electrical_safety_precautions[Math.floor(Math.random() * electrical_safety_precautions.length)];
        speech.text = finalresult;
    } 

     if(message.includes('fire')||message.includes('exit')||message.includes('extinguishers')){
        let finalresult = fire_precautions[Math.floor(Math.random() * fire_precautions.length)];
        speech.text = finalresult;
    } 
    if(message.includes('sunburn')||message.includes('burn')||message.includes('outside')){
        let finalresult = sunburn_precaution[Math.floor(Math.random() * sunburn_precaution.length)];
        speech.text = finalresult;
    } 
    if(message.includes('name')||message.includes('bot')){
        let finalresult = namess[Math.floor(Math.random() * namess.length)];
        speech.text = finalresult;
    }
    if(message.includes('protocols')){
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }
    if(message.includes('wearables')||message.includes('devices')){
        let finalresult = available[Math.floor(Math.random() * available.length)];
        speech.text = finalresult;
    }
    if(message.includes('thank you')||message.includes('thanks')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }

    if(message.includes("bye")||message.includes('close')){
         let finalresult = closing[Math.floor(Math.random() * closing.length)];
         speech.text = finalresult;
      }
        
    
    
    if(message.includes('diarrhoea')){
        let finalresult = diarrhoea[Math.floor(Math.random()* diarrhoea.length)];
        speech.text = finalresult;
    }
    if(message.includes("migraine")){
        let finalresult = migrane[Math.floor(Math.random() * migrane.length)];
        speech.text = finalresult;
    }
   

   
    


    if(message.includes("headache")||message.includes("head pain")){
        let finalresult = headache[Math.floor(Math.random() * headache.length)];
        speech.text = finalresult;
    }
    if(message.includes("tooth ache")||message.includes("tooth pain")||message.includes("decay")){
        let finalresult = tooth_ache[Math.floor(Math.random() * tooth_ache.length)];
        speech.text = finalresult;
    }
    if(message.includes("back pain")||message.includes("spine pain")){
        let finalresult = back_pain[Math.floor(Math.random() * back_pain.length)];
        speech.text = finalresult;
    }
   
    if(message.includes('talk to you later')||message.includes("bye")||message.includes("leave")){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }

    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}


recognition.onend=function(){
    mic.style.background="#ff3b3b";
}
mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
})