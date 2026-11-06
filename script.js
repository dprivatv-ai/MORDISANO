
// Configura aquí el WhatsApp comercial de MORDISANO en formato internacional, sin + ni espacios.
const WHATSAPP_NUMBER = "51999999999"; // Reemplazar por el número oficial antes de publicar.
const waLink = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
document.querySelectorAll("[data-wa]").forEach(a => { a.href = waLink(a.dataset.wa || "Hola, deseo información sobre MORDISANO."); a.target="_blank"; a.rel="noopener"; });
const toggle=document.querySelector(".menu-toggle"), links=document.querySelector(".navlinks");
if(toggle && links) toggle.addEventListener("click",()=>links.classList.toggle("open"));
document.querySelectorAll("[data-buy]").forEach(btn=>btn.addEventListener("click",()=>{
 const name=btn.dataset.buy, price=btn.dataset.price;
 window.open(waLink(`Hola, deseo consultar disponibilidad y realizar un pedido de ${name}. Precio referencial: ${price}. ¿Me pueden ayudar?`),"_blank","noopener");
}));
const consult=document.querySelector("#consult-form");
if(consult) consult.addEventListener("submit",e=>{
 e.preventDefault(); const d=new FormData(consult);
 const msg=`Hola MORDISANO, deseo solicitar orientación especializada. Nombre: ${d.get("nombre")}. Correo: ${d.get("correo")}. Mascota: ${d.get("mascota")}. Consulta: ${d.get("consulta")}`;
 window.open(waLink(msg),"_blank","noopener");
});
