import test from "node:test";
import assert from "node:assert/strict";
import { calculateQuote, personnelPrice } from "../lib/pricing.js";
import { buildWhatsAppUrl } from "../lib/whatsapp.js";
test("Normal tariff boundaries and first-week rates", () => {
  for (const [count, s, p] of [
    [1, 199, 249],
    [20, 199, 249],
    [21, 189, 239],
    [50, 189, 239],
    [51, 179, 229],
    [100, 179, 229],
  ]) {
    assert.equal(personnelPrice("standart", count, "regular"), s);
    assert.equal(personnelPrice("premium", count, "regular"), p);
    assert.equal(personnelPrice("standart", count, "intro"), 149);
    assert.equal(personnelPrice("premium", count, "intro"), 179);
  }
});
test("Unsupported counts and custom quotes never fabricate prices", () => {
  for (const count of [0, 1.5, 101])
    assert.equal(personnelPrice("standart", count, "regular"), null);
  assert.equal(calculateQuote("ozel", 50).price, null);
  assert.equal(calculateQuote("standart", 0).valid, false);
  assert.equal(calculateQuote("et-baklava", 100).totalLabel, "31.900 TL");
});
test("Savings, tax and chosen phone survive WhatsApp encoding", () => {
  const q = calculateQuote("premium", 50, "regular");
  const url = new URL(
    buildWhatsAppUrl(
      {
        name: "Deneme & Firma",
        people: "50",
        date: "2026-12-10",
        region: "Beylikdüzü",
        contact: "905342736607",
        notes: "İki vardiya",
      },
      q,
    ),
  );
  assert.equal(url.pathname, "/905342736607");
  assert.match(url.searchParams.get("text"), /11.950 TL/);
  assert.match(url.searchParams.get("text"), /İlk haftadan sonra/);
  assert.match(
    calculateQuote("standart", 50, "intro").savingsLabel,
    /2.000 TL/,
  );
});
