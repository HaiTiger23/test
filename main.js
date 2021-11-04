var SG = document.getElementById('suggestion');
var Ans = document.getElementById('answer');
var ques = document.getElementById('question');
var quess = [
    [
        "what is the name of the…..?",
        "IN HOA, BÔI ĐẬM"
    ],
    [
        "what is the address of the….. ||  where is the……?",
        "-	…..Street/ …Road/ <br>…Avenue <br>in/ at...."
    ],
    [
        "-	where is the ……?",
        "-	in/ at ……	<br>20 kilometers from…<br>	next to (opposite…) the…."

    ],
    [
       " -	What is …… phone number? (its/ his/ her/ their)",
       "Tel: 012345678 <br>Call / phone: 012345678"

    ],
    [
        "Where can I buy ….?",
        "in/ at/ from … … e.g. You can buy…..from Tony’s bookshop"
        
    ],
    [
    "When is the……? <br>When does the …..open (start, close, begin, finish)? <br> When can I see film?",
    "At 8 p.m.<br>Next Friday <br>On May 26"
    ],
    [
        "What time is the…..?<br> What time does it start (begin, close, finish, open...)",
        "It is at …<br>It starts at….."
    ],
    [
        "Who is the writer(musical)?",
        "Tên người in bôi đậm (sau giới từ “by”)"
    ],
    [
        "Is there any car park? …..<br> Is there any film on Mondays? ",
        "Yes, there is. …….<br>No, there isn’t."
    ],
    [
        "Is/are the …….interesting/ cheap/ expensive/ new/ good?",
        "Yes, there is. …….<br>No, there isn’t.<br>Yes, they are."
    ],
    [
        "How much is/are the ……?<br>How much does/ do the …..cost?<br>How much is a student ticket (…)/ How much does a student ticket cost?",
        "it is + giá tiền(£:pound (pao), €: euro (ơ rô) $: dollar (đô lờ))"
    ],
    [
        "Is it for all ages ((everyone/ all students/ children/ adults…))?",
        "Yes, it is. …….<br>No, it isn’t.<br>Yes, they are."
    ],
    [
        "Can I + (Bring/ take/ need/ buy/ see/meet/cook/learn/go……)?",
        "Yes, You Can. …….<br>No,You Can not."
    ],
    [
        "Does it open (close) on Monday (at the weekend,in June…)",
        "Yes, it does.  …….<br>No, it doesn't."
    ],
    [
        "What can I bring (take, need, buy, see/ learn/cook……)",
        "You can bring (take, need, buy, see/ learn……)…."
    ],
    [
        "If I win, what do (can) I get?",
        "You can get…"
    ],
    [
        "How long is the ….?<br> How long does the …take?",
        "It takes ………"
    ],
    [
        "What colour is the…?",
        "It is … (red, green…)"
    ],
    [
        "What make and model is your phone (computer)?",
        "It is an Iphone 7 plus (a Dell Vostrol SP500)."

    ],
    [
        "What type of ... are/is there ?",
        "There are/is ...(Kể tên các loại ra)"
    ],
    [
        "How Can I get more information ?",
        "You can call/ vist + ...(Số điện thoại, website)"
    ],
    [
        "What is the website ?",
        "It is ..."
    ],
    [
        "what is the age of the ...", 
        "it is ..."
    ]

]
SG.addEventListener("input", function() {
    console.log(SG.value.length )
    SG.value = SG.value.toLowerCase();
    var ansArray = ` `;
        var quessArray = ` `;
    for(var i = 0 ; i < quess.length;i++) {
       var Ktra = quess[i][0].toLowerCase();
    if(Ktra.indexOf(SG.value)!= -1) {
         ansArray += `<div class = "ptu_ans">${Ktra}</div>`;
         quessArray += `<div class = "ptu_ans">${quess[i][1]}</div>`;

    }
    if(SG.value.length == 0) {
        ansArray = " ";
        quessArray = " ";
    }
     Ans.innerHTML= ansArray;
     ques.innerHTML = quessArray;
    }
})
