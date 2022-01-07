
const $input = document.querySelector(".game_start input");
console.log($input);

const $play = document.querySelector(".game .play");
console.log($input);

const $button = document.querySelector(".game_start button");
console.log($button);


const $monester = document.querySelector(".play .monester");
const $picka = document.querySelector(".play .picka");
const $play_02 = document.querySelector(".play .play_02")
const $play_03 = document.querySelector(".play .play_03")

const $travel_punch = document.querySelector(".play .travel_punch");
const $travel_defense = document.querySelector(".play .travel_defense");
const $travel_recovery = document.querySelector(".play .travel_recovery");
const $travel_done = document.querySelector(".play .travel_done");
const $punchimg = document.querySelector(".punch_img");
console.log($punchimg);

const $buttons = document.querySelector("#game .buttons");

// 게임시작
function startGame(){
    var $character = $input.value;    
    $character.innerHTML =  $input.value;
    console.log($character);
    $play_02.innerHTML = `캐릭터의 이름은 ${$character}입니다. ${$character}가 모험을 떠납니다.`
    $picka.setAttribute("src", "../img/picka.png");
    $picka.style.display = "block";
    $play_03.style.display = "block";
    $monester.setAttribute("src", "../img/파이리.png");
    $monester.style.display = "block";
    $input.value = "";
}

$button.onclick = startGame;

$input.addEventListener("keydown", function(e){
    if(e.keyCode == 13 && $input.value == ""){ 
        alert("캐릭터의 이름을 입력해주세요.");
    }else if(e.keyCode == 13){
        startGame();
    }
});


// 적
const $war = {
    hp: 300,
    punch : 300,
    defense : 150,
    recovery : 200,
    weapon : "불뿜기",
    img: "십자가.jpeg"
}

// 피카츄
const $hero = {
    hp : 100,
    punch : 100,
    defense : 100,
    recovery : 100,
    weapon : "백만볼트",
    img: "picka2.png"
}

// var $hpps = $war.hp;
// var $imgs = $hero.img;




// const punchHit = Math.ceil(Math.random() * 200) + 1;
// const damage = Math.ceil(Math.random() * 100) + 1;
// const healer = Math.ceil(Math.random() * 30) + 1;
// console.log("나의 생명력" + healer);


// console.log("랜덤값" + punchHit)
// console.log("체력" + $war.hp);
//     $war.hp -= punchHit
    // $hero.hp -= damage
    // var $hpps =  $hero.hp -= damage


function punch(){
    // console.log("클릭")

    const punchHit = Math.ceil(Math.random() * 150) + 1;
    const damage = Math.ceil(Math.random() * 100) + 1;
    // const healer = Math.ceil(Math.random() * 30) + 1;
    // console.log("나의 생명력" + healer);


    console.log("랜덤값" + punchHit)
    console.log("체력" + $war.hp);
        $war.hp -= punchHit
        // var $hpps =  $hero.hp -= damage
        $hero.hp -= damage


        console.log("랜덤 공격력" + punchHit);
        console.log("남은체력" + $war.hp);
        $travel_punch.innerHTML = `나의 캐릭터가 ${punchHit}의 공격력으로 ${$hero.weapon}공격을 시작합니다.`+ "<br>" + `${damage}의 공격력이 빗나갔습니다.`+"<br>"+ `현재 적의 생명력은 ${$war.hp + damage} 입니다.` +"<br>"+`공격력이 빗나가 생명력에 ${damage}의 피해를 입었습니다. `;




        console.log("맞은 데미지" + damage);
        console.log("나의 캐릭터남은 체력" + $hero.hp);
        // $travel_defense.innerHTML = `공격력이 빗나가 ${damage}의 피해를 입었습니다.`;

    if($war.hp <= 0){
        $travel_punch.innerHTML = `야생의 포켓몬의 생명력이 모두 소진되어 사망했습니다.` +"<br>"+ `게임 재시작은 새로고침을 해주세요.`;
        $buttons.style.display = "none";
    }

    if($hero.hp <= 0 ){
        $travel_punch.innerHTML = `나의 캐릭터의 생명력이 모두 소진되어 사망했습니다.`+"<br>"+ `게임 재시작은 새로고침을 해주세요.`;
        $buttons.style.display = "none";
    }


}

function defense(){
    const $armor = Math.ceil(Math.random() * 30) + 1;
    var $totaldefense = $hero.defense += $armor
    console.log($armor + "방어력");

    $travel_defense.innerHTML= `방어하기를 클릭하여 방어력이 랜덤으로 ${$armor} 상승했습니다.` +"<br>"+ ` 현재 나의 방어력은 ${$totaldefense} 입니다.`;


    if($hero.defense >= 135){
        $travel_defense.innerHTML = `방어력은 135이상 올릴 수 없습니다.`;
    };
}

function recovery(){
    console.log("클릭");

    const healer = Math.ceil(Math.random() * 30) + 1;
    console.log("나의 생명력" + healer);

    var $total_healer = $hero.hp += healer

    $travel_recovery.innerHTML = `회복하기를 클릭하여 생명력이 ${healer} 상승했습니다. 현재 나의 생명력은 ${$total_healer} 입니다.`;

    if($total_healer >= 200){
        $travel_recovery.innerHTML = `생명력은 200이상 올릴 수 없습니다.`;
    }
}

function done(){
    $travel_done.innerHTML = `게임이 종료 되었습니다.`+"<br>"+ `게임 재시작은 새로고침을 해주세요.`;
    $buttons.style.display = "none";
}

