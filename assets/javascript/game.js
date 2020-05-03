$(document).ready(function () {
    let counter = 0;
    let enemyCounter = 0;
    let myHealth, enemyHealth, myAttack = 8, enemyAttack, myPlayer, enemyPlayer;

    $(".bigDiv").click(function () {
        if (counter === 0) {
            let player = $(this);
            myPlayer = $(this).find("figcaption.points");
            console.log(" the value is " + myPlayer)
            $(".biggerChoice").append($(".characterRow"));
            $(".smallerChoice").append($(".enemiesToAttach"));
            $(".myChoice").append(player);
            
            if (this.id == "anakin") {
                myHealth = 100;
            } else if (this.id == "sidius") {
                myHealth = 150;
            } else if (this.id == "obiWan") {
                myHealth = 180;
            } else if (this.id == "yoda") {
                myHealth = 120;
            }
            counter++;
        } else if (counter === 1) {
            myEnemy = $(this).find("figcaption.points");
            console.log(this + " This is another one")
            if (this.id == "anakin") {
                console.log("keeps going")
                enemyHealth = 100;
                console.log(enemyHealth)
                enemyAttack = 5;
            } else if (this.id == "sidius") {
                console.log("Sidius")
                enemyHealth = 150;
                console.log(enemyHealth)
                enemyAttack = 10;
            } else if (this.id == "obiWan") {
                enemyHealth = 180;
                enemyAttack = 25;
            } else if (this.id == "yoda") {
                enemyHealth = 120;
                enemyAttack = 15;
            }
            $(".enemy").append($(this));
            counter++;
            enemyCounter++;
            console.log($(this) + " This is the enemy")
        } else {
            return;
        }
        $("#final").text(`Fight!`)
    })
    $("button").click(function () {
        if (enemyCounter == 3 && enemyHealth <= 0) {
            $("#final").text(`YOU WON!`)
            $(".enemy").empty();
        }
        else if(myHealth > 0 && enemyHealth > 0) {
        enemyHealth = enemyHealth - myAttack;
        myHealth = myHealth - enemyAttack;
        myAttack += 8;
        $("#final").text(`You attacked your enemy for ${myAttack} damage
        \n Your enemy attacked you back for ${enemyAttack} damage`)
        } else if (enemyHealth <= 0){
            counter = 1;
            $(".enemy").empty();
            $("#final").text(`Character defeated, please choose another character to fight!`)
        } else if (myHealth <= 0) {
            $("#final").text(`You Lose! Refresh to try again!`)
        }
        myPlayer.text(myHealth);
        myEnemy.text(enemyHealth);
        console.log("myHealth: " + myHealth)
        console.log("enemyHealth: " + enemyHealth)
        console.log("myAttack: " + myAttack)
        console.log("enemyAttack: " + enemyAttack)
        console.log("EnemyCounter " + enemyCounter)
    })
})