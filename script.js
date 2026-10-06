const WHATSAPP_NUMBER = "201108302815";

function orderNow(game, packageName, price) {
    const playerId = document.getElementById("playerId").value.trim();

    if (!playerId) {
        alert("من فضلك اكتب ID اللعبة أولاً.");
        document.getElementById("playerId").focus();
        return;
    }

    const message = `
مرحباً LEO STORE 👋

🎮 اللعبة: ${game}
📦 الباقة: ${packageName}
💰 السعر: ${price} جنيه
🆔 ID اللاعب: ${playerId}

أريد إتمام طلب الشحن.
`;

    const whatsappURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
}
