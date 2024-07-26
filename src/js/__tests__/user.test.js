import Magician from "../magician";
import Daemon from "../daemon";

const magician = new Magician();
const daemon = new Daemon();

test('Magician attack on range 0 or less', () => {
  magician.attack = 0;
  expect(magician.attack).toBe(100);
})

test('Magician attack on range 3 without stoned effect', () => {
  magician.attack = 3;
  expect(magician.attack).toBe(80);
  expect(magician.stonedEffect).toBe(0);
})

test('Magician attack on range 3 with stoned effect', () => {
  magician.isStoned = true;
  magician.attack = 3;
  expect(magician.attack).toBe(72);
})

test('Magician attack on range more then 10', () => {
  magician.attack = 11;
  expect(magician.attack).toBe(0);
})

test('Daemon attack on range 4 without stoned effect', () => {
  daemon.attack = 4;
  expect(daemon.attack).toBe(140);
})

test('Daemon attack on range 4 with stoned effect', () => {
  daemon.isStoned = true;
  daemon.attack = 4;
  expect(daemon.attack).toBe(130);
})