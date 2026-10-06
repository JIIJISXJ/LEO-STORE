const WHATSAPP_NUMBER = "201108302815";

function orderNow(gameName, productName, price) {

    const playerInput = document.getElementById("playerId");

    const playerId = playerInput.value.trim();

    if (playerId === "") {

        alert("من فضلك اكتب ID اللاعب أولاً.");

        playerInput.focus();

        return;
    }

    const message =
`مرحباً LEO STORE 👋

🎮 اللعبة: ${gameName}

📦 اسم المنتج: ${productName}

💰 السعر: ${price} جنيه مصري

🆔 ID اللاعب: ${playerId}

أريد طلب هذا المنتج، من فضلك.`;

    const whatsappURL =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}
