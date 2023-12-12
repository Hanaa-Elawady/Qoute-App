var num2;
function randomQoutes(){
    var qoutes= ["Working hard is important but there is something that matters even more; believing in yourself",
            "We have all got both light and dark inside us. What matters is the part we choose to act on, that is who we really are.",
            "Being different isn't a bad thing, it means you're brave enough to be yourself",
            "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light",
            "Fear of a name only increases fear of the thing itself.",
            "It may have scaped your notice, but Life isn't fair.",
            "What's coming is coming and we will face it when it does",
            "What is life without a little risk?",
            "Don't pity the dead, pity the living and above all those who lifes without love",
            "Dobby has no master. Dobby is a free elf, and Dobby has come to save Harry Potter and his friends!",
            "I've always wanted to use that spell!",
            'lily! After all this time?</br>"Always!"'];

    var name= ["Harry Potter",
            "Sirius black",
            "Luna lovegood",
            "Albus Dumbledore",
            "Hermione Granger",
            "severus snape",
            "Hagrid",
            "Sirius black",
            "Albus Dumbledore",
            "Dobby",
            "Professor McGonagall",
            "severus snape"];

    var image=['img/a8615048ac1d74b988efa52e29e42de1.jpg',
            'img/a43ceee81c0b8fe7169997432f2f1740.jpg',
            'img/b321734d9fcc816e62243ced7fa1030b.jpg',
            'img/65fd446b456486f5e14600beba3ea738.jpg',
            'img/5659107c808831be11215fc76ee52607.jpg',
            'img/c3276ab22bc85c61eebc4d960acf48b1.jpg',
            'img/2f38d258c774e94680abaae8c33598b9.jpg',
            'img/a43ceee81c0b8fe7169997432f2f1740.jpg',
            'img/65fd446b456486f5e14600beba3ea738.jpg',
            'img/aefdb1cb1f12be953af96cd376a01ca5.jpg',
            'img/2f9287a5a6c97ca9371ff21ebabcb59c.jpg',
            'img/c3276ab22bc85c61eebc4d960acf48b1.jpg'];

    var num= Math.floor( Math.random()* qoutes.length );

    while(num === num2){
        num= Math.floor( Math.random()* qoutes.length );
    }

    document.getElementById('qoute').innerHTML = qoutes[num];
    document.getElementById('name').innerHTML = name[num];
    document.getElementById('image').src = image[num];
    
    num2= num;
}

