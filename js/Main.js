import AssetManager from "./AssetManager.js";
import Mixer from "./Mixer.js";
import InputManager from "./InputManager.js";
import Game from "./Game.js";
import CenaJogo from "./CenaJogo.js";
import CenaCarregando from "./CenaCarregando.js";
import CenaFim from "./CenaFim.js";
import Sprite from "./Sprite.js";
import Mapa from "./Mapas.js";
import modeloMapa1 from "../maps/mapa1.js";


const input = new InputManager();
const mixer = new Mixer(10);
const assets = new AssetManager(mixer);


assets.carregaImagem("garota", "assets/garota.png");
assets.carregaImagem("esqueleto", "assets/skelly.png");
assets.carregaImagem("orc", "assets/orc.png");
assets.carregaAudio("moeda", "assets/coin.wav");
assets.carregaAudio("explosao", "assets/boom.wav");



const canvas = document.querySelector("canvas");
canvas.width = 14 * 32;
canvas.height = 10 * 32;

input.configurarTeclado({
    "ArrowLeft": "MOVE_ESQUERDA",
    "ArrowRight": "MOVE_DIREITA",
    "ArrowUp": "MOVE_ACIMA",
    "ArrowDown": "MOVE_ABAIXO",
    " ": "PROXIMA_CENA",
 });


const game = new Game(canvas, assets, input);
const cena0 = new CenaCarregando();
//const cena1 = new Fase_Map1();
//const cena2 = new Fase_Map2();
const cena3 = new CenaFim();

game.adicionarCena("carregando", cena0);
//game.adicionarCena("fase1", cena1);
//game.adicionarCena("fase2", cena2);
game.adicionarCena("fim", cena3);
game.iniciar();

document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "s":
            game.iniciar();
            break;
        case "S":
            game.parar();
            break;
        case "c":
            assets.play("moeda");
            break;
        case "b":
            assets.play("explosao");
            break;
    }
});