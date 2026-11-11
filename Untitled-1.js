
{
  console.log("===== 01 Fatura e librarise =====");
  const cmimiLibri = 12.5;
  const sasiaLibra = 3;
  const cmimiFletore = 1.8;
  const sasiaFletore = 4;

  const kostoLibra = cmimiLibri * sasiaLibra;
  const kostoFletore = cmimiFletore * sasiaFletore;
  let total = kostoLibra + kostoFletore;
  total += 2.5; // transport

  console.log("Libra: " + sasiaLibra + " x " + cmimiLibri.toFixed(2) + " = " + kostoLibra.toFixed(2));
  console.log("Fletore: " + sasiaFletore + " x " + cmimiFletore.toFixed(2) + " = " + kostoFletore.toFixed(2));
  console.log("Transport: 2.50");
  console.log("Totali: " + total.toFixed(2));
}

{
  console.log("\n===== 02 Rezultati i vleresimit =====");
  const aktiviteti = 18;
  const projekti = 24;
  let provimi = 43;
  const maksimumi = 100;

  let totaliPikeve = aktiviteti + projekti + provimi;
  let perqindja = (totaliPikeve / maksimumi) * 100;
  console.log("Para korrigjimit: totali = " + totaliPikeve + " pike, perqindja = " + perqindja + "%");

  provimi = 48; 
  totaliPikeve = aktiviteti + projekti + provimi;
  perqindja = (totaliPikeve / maksimumi) * 100;
  console.log("Pas korrigjimit: totali = " + totaliPikeve + " pike, perqindja = " + perqindja + "%");
}

{
  console.log("\n===== 03 Buxheti i nje udhetimi =====");
  const akomodimi = 96;
  const transporti = 42;
  const ushqimi = 57;
  const personat = 3;
  const buxhetiPerPerson = 80;

  const kostoTotale = akomodimi + transporti + ushqimi;
  const pjesaPerPerson = kostoTotale / personat;
  const mbetja = buxhetiPerPerson - pjesaPerPerson;

  console.log("Kostoja totale e udhetimit eshte " + kostoTotale + " euro.");
  console.log("Secili person duhet te paguaje " + pjesaPerPerson + " euro.");
  console.log("Secilit person i mbeten " + mbetja + " euro nga buxheti prej " + buxhetiPerPerson + " euro.");
}

{
  console.log("\n===== 04 Porosia online me zbritje =====");
  const cmimi1 = 35;
  const sasia1 = 2;
  const cmimi2 = 24;
  const sasia2 = 1;
  const zbritjaPerqind = 15;
  const transporti = 4;

  const cmimiParaZbritjes = cmimi1 * sasia1 + cmimi2 * sasia2;
  const shumaZbritjes = cmimiParaZbritjes * zbritjaPerqind / 100;
  const cmimiPasZbritjes = cmimiParaZbritjes - shumaZbritjes;
  const vleraPerfundimtare = cmimiPasZbritjes + transporti;

  console.log("Cmimi para zbritjes: " + cmimiParaZbritjes.toFixed(2));
  console.log("Zbritja (15%): " + shumaZbritjes.toFixed(2));
  console.log("Cmimi pas zbritjes: " + cmimiPasZbritjes.toFixed(2));
  console.log("Transporti: " + transporti.toFixed(2));
  console.log("Vlera perfundimtare: " + vleraPerfundimtare.toFixed(2));
}

{
  console.log("\n===== 05 Konvertimi i te dhenave =====");
  const a = "25";
  const b = "17";
  const c = "8";

  console.log("Pa konvertim: " + (a + b + c));

  const shuma = Number(a) + Number(b) + Number(c);
  const mesatarja = shuma / 3;

  console.log("Shuma: " + shuma + " (tipi: " + typeof shuma + ")");
  console.log("Mesatarja: " + mesatarja + " (tipi: " + typeof mesatarja + ")");
}

{
  console.log("\n===== 06 Analiza e kohes se studimit =====");
  const eHene = 95;
  const eMarte = 80;
  const eMerkure = 115;

  const gjithsejMinuta = eHene + eMarte + eMerkure;
  const kohaNeOre = gjithsejMinuta / 60;
  const minutaTeMbetura = gjithsejMinuta % 60;

  console.log("Gjithsej minuta: " + gjithsejMinuta);
  console.log("Koha ne ore: " + kohaNeOre);
  console.log("Minuta qe mbeten pas ndarjes me 60: " + minutaTeMbetura);
}

{
  console.log("\n===== 07 Inventari i dyqanit =====");
  let stoku = 120;
  const cmimiNjesise = 6.75;
  console.log("Stoku fillestar: " + stoku);

  stoku -= 18;
  console.log("Pas shitjes se pare (18): " + stoku);

  stoku -= 27;
  console.log("Pas shitjes se dyte (27): " + stoku);

  stoku += 35;
  console.log("Pas shtimit te 35 njesive: " + stoku);

  const vleraStokut = stoku * cmimiNjesise;
  console.log("Vlera e stokut perfundimtar: " + vleraStokut.toFixed(2));
}

{
  console.log("\n===== 08 Shperndarja e materialeve =====");
  const fletePune = 157;
  const fletePerStudent = 6;

  const grupet = parseInt(fletePune / fletePerStudent);
  const mbetja = fletePune % fletePerStudent;

  console.log("Grupe te plota prej 6 fletesh: " + grupet);
  console.log("Flete te mbetura: " + mbetja);
  console.log("Kontroll: (" + grupet + " * " + fletePerStudent + ") + " + mbetja + " = " + (grupet * fletePerStudent + mbetja));
}

{
  console.log("\n===== 09 Fatura me te dhena tekstuale =====");
  const cmimiTekst1 = "19.90";
  const cmimiTekst2 = "8.50";
  const sasia1 = 2;
  const sasia2 = 3;

  const cmimi1 = Number(cmimiTekst1);
  const cmimi2 = Number(cmimiTekst2);

  const totali1 = cmimi1 * sasia1;
  const totali2 = cmimi2 * sasia2;
  const shumaPorosise = totali1 + totali2;
  const tarifaSherbimit = shumaPorosise * 10 / 100;
  const shumaFinale = shumaPorosise + tarifaSherbimit;
  const shumaFormatizuar = shumaFinale.toFixed(2);

  console.log("Artikulli 1: " + sasia1 + " x " + cmimi1 + " = " + totali1);
  console.log("Artikulli 2: " + sasia2 + " x " + cmimi2 + " = " + totali2);
  console.log("Shuma e porosise: " + shumaPorosise);
  console.log("Shuma finale (me 10% tarife sherbimi): " + shumaFormatizuar);
  console.log("Tipi i vleres se formatizuar: " + typeof shumaFormatizuar);
}

{
  console.log("\n===== 10 Raporti financiar i nje aktiviteti =====");
  const pjesemarres = 45;
  const tarifa = 12;
  const salla = 180;
  const materialet = 95;
  const reklama = 60;

  const teArdhurat = pjesemarres * tarifa;
  let shpenzimetTotale = salla + materialet + reklama;
  let diferenca = teArdhurat - shpenzimetTotale;

  console.log("Te ardhurat: " + teArdhurat);
  console.log("Shpenzimet totale: " + shpenzimetTotale);
  console.log("Diferenca: " + diferenca);

  shpenzimetTotale += 25; 
  diferenca = teArdhurat - shpenzimetTotale;

  console.log("--- Pas shpenzimeve te paparashikuara (25) ---");
  console.log("Shpenzimet totale te reja: " + shpenzimetTotale);
  console.log("Diferenca e re: " + diferenca);
}