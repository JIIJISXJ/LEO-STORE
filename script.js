const WHATSAPP_NUMBER = "201108302815";
const INSTAGRAM_USERNAME = "mohamedabdelazizx";

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


// ===============================
// طرق الدفع
// ===============================

function showPaymentInfo() {

    alert(
`💳 طرق الدفع المتاحة:

🔴 Vodafone Cash
01094676883

🟢 Etisalat Cash
01109302815

بعد التحويل، تواصل معنا على واتساب وأرسل صورة التحويل.`
    );
}


// ===============================
// فتح واتساب
// ===============================

function openWhatsApp() {

    const whatsappURL =
        "https://wa.me/" + WHATSAPP_NUMBER;

    window.open(whatsappURL, "_blank");
}


// ===============================
// فتح إنستجرام
// ===============================

function openInstagram() {

    const instagramURL =
        "https://www.instagram.com/" +mohamedabdelazizx + "/";

    window.open(instagramURL, "_blank");
}
