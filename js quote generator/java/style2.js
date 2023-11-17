let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
let btn = document.querySelector("#new-quote");

let quotes = [
    {
        quote: "Education is the most powerful weapon which you can use to change the world.",
        author: "Nelson Mandela"
    },
    {
        quote: "There is always light. If only we're brave enough to see it. If only we're brave enough to be it.",
        author: "Amanda Gorman"
    },
    {
        quote: "If you want to lift yourself up, lift up someone else.",
        author: "Booker T. Washington"
    },
    {
        quote: "I have learned not to allow rejection to move me.",
        author: "Cicely Tyson"
    },
    {
        quote: "It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent.",
        author: "Madeleine Albright"
    },
    {
        quote: "You can't rely on how you look to sustain you, what sustains us, what is fundamentally beautiful is compassion; for yourself and your those around you.",
        author: "Lupita Nyong'o"
    },
    {
        quote: "Attitude is the 'little' thing that makes a big difference",
        author: "Winston Churchill"
    },
    {
        quote: "Don't sit down and wait for the opportunities to come. Get up and make them.",
        author: "Madam C.J Walker"
    },
    {
        quote: "The people who are crazy enough to think they can change the world are the ones who do.",
        author: "Steve Jobs"
    },
    {
        quote: "We do not fall in love with the package of the person; we fall in love with the inside of a person.",
        author: "Anne Heche"
    },
    {
        quote: "If what you have done yesterday still looks big to you, you haven't done much today.",
        author: "Mikhail Gorbachev"
    },
    {
        quote: "Don't save your best for when you think the material calls for it. Always bring your full potential to every take, and be on top of your job, or they will replace you.",
        author: "Gabrielle Union"
    },
    {
        quote: "One of the lessons that I grew up with was to always stay true to yourself and never let what somebody else says distract you from your goals.",
        author: "Michelle Obama"
    },
    {
        quote: "Always work hard and have fun in what you do because I think that's when you're more successful. You have to choose to do it.",
        author: "Simone Biles"
    },
    {
        quote: "I don't harp on the negative because if you do, then there's no progression. There's no forward movement. You got to always look on the bright side of things, and we are in control. Like, you have control over the choices you make.",
        author: "Taraji P. Henson"
    },
    {
        quote: "All dreams are within reach. All you have to do is keep moving towards them.",
        author: "Viola Davis"
    }
];

btn.addEventListener('click', function(){
    let random =  Math.round((Math.random()) * quotes.length);
   console.log(random);

    author.innerText = quotes[random].author;
    quote.innerText = quotes[random].quote;



});













