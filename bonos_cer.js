// bonos_cer.js — Parámetros de los bonos CER.
// base = "valor de emisión" efectivo: CER de la fecha de emisión menos 10 días hábiles (4+ decimales); para los de BYMA coincide con su "Valor de emisión".
//   Para DICP / PARP / CUAP / TX31 es el valor implícito en los cashflows de BYMA (la pantalla lo muestra redondeado).
// Cronograma de cupón: pares [mes, día] de cada año; anchor = último cupón ya pagado cargado;
//   resAnchor = valor residual (%) después de ese cupón; tasas = [[desde, tasa anual]]; amort = % del nominal original por pago desde "desde".
// Cupón sobre el residual anterior, base 30/360 (DICP/PARP/CUAP/TX: semestral).
window.BONOS_CER = {
  TZXM7: { fam: 'BONCER', zero: true, emision: '2024-05-20', vto: '2027-03-31', base: 361.3176, freq: 1 },
  TZXD6: { fam: 'BONCER', zero: true, emision: '2024-03-15', vto: '2026-12-15', base: 271.0476, freq: 1 },
  TZXA7: { fam: 'BONCER', zero: true, emision: '2025-11-28', vto: '2027-04-30', base: 651.8981, freq: 1 },
  TZXY7: { fam: 'BONCER', zero: true, emision: '2025-12-15', vto: '2027-05-31', base: 659.6789, freq: 1 },
  TZX27: { fam: 'BONCER', zero: true, emision: '2024-02-01', vto: '2027-06-30', base: 200.3880, freq: 1 },
  TZXS7: { fam: 'BONCER', zero: true, emision: '2026-03-31', vto: '2027-09-30', base: 723.0600, freq: 1 },
  X29E7: { fam: 'LECER',  zero: true, emision: '2026-08-14', vto: '2027-01-29', base: 815.49, freq: 1 }, // base fija de BYMA (la serie da 815,4345)
  TZXD7: { fam: 'BONCER', zero: true, emision: '2024-03-15', vto: '2027-12-15', base: 271.0476, freq: 1 },
  TZXO7: { fam: 'BONCER', zero: true, emision: '2026-06-30', vto: '2027-10-29', base: 791.4897, freq: 1 },
  TZXM8: { fam: 'BONCER', zero: true, emision: '2026-03-31', vto: '2028-03-31', base: 723.0600, freq: 1 },
  TZX28: { fam: 'BONCER', zero: true, emision: '2024-02-01', vto: '2028-06-30', base: 200.3880, freq: 1 },
  TZXS8: { fam: 'BONCER', zero: true, emision: '2026-03-31', vto: '2028-09-29', base: 723.0600, freq: 1 },
  TZXD8: { fam: 'BONCER', zero: true, emision: '2026-06-30', vto: '2028-12-15', base: 791.4897, freq: 1 },
  TZXM9: { fam: 'BONCER', zero: true, emision: '2026-03-31', vto: '2029-03-28', base: 723.0600, freq: 1 },
  X30N6: { fam: 'LECER',  zero: true, emision: '2025-12-15', vto: '2026-11-30', base: 659.6789, freq: 1 },
  TX26:  { fam: 'BONCER', emision: '2020-09-04', vto: '2026-11-09', base: 22.5439, freq: 2,
           pares: [[5, 9], [11, 9]], anchor: '2025-11-09', resAnchor: 40,
           tasas: [['2000-01-01', 0.02]], amort: { desde: '2024-11-09', pct: 20 } },
  TX28:  { fam: 'BONCER', emision: '2020-09-04', vto: '2028-11-09', base: 22.5439, freq: 2,
           pares: [[5, 9], [11, 9]], anchor: '2025-11-09', resAnchor: 60,
           tasas: [['2000-01-01', 0.0225]], amort: { desde: '2024-05-09', pct: 10 } },
  TX31:  { fam: 'BONCER', emision: '2022-05-31', vto: '2031-11-30', base: 46.9099, freq: 2,
           pares: [[5, 30], [11, 30]], anchor: '2025-11-30', resAnchor: 100,
           tasas: [['2000-01-01', 0.025]], amort: { desde: '2027-05-30', pct: 10 } },
  DICP:  { fam: 'BONCER', emision: '2003-12-31', vto: '2033-12-31', base: 1.145775, freq: 2,
           pares: [[6, 30], [12, 31]], anchor: '2025-12-31', resAnchor: 80,
           tasas: [['2000-01-01', 0.0583]], amort: { desde: '2024-06-30', pct: 5 } },
  PARP:  { fam: 'BONCER', emision: '2003-12-31', vto: '2038-12-31', base: 1.4551, freq: 2,
           pares: [[3, 31], [9, 30]], anchor: '2025-09-30', resAnchor: 100,
           tasas: [['2000-01-01', 0.0177], ['2029-03-31', 0.0248]], amort: { desde: '2029-09-30', pct: 5 } },
  CUAP:  { fam: 'BONCER', emision: '2003-12-31', vto: '2045-12-31', base: 1.04789, freq: 2,
           pares: [[6, 30], [12, 31]], anchor: '2025-12-31', resAnchor: 100,
           tasas: [['2000-01-01', 0.0331]], amort: { desde: '2036-06-30', pct: 5 } }
};

// Precios iniciales (c/100 VN, cierre del 29/10/2026). Se pisan con "Actualizar precios".
window.PRECIOS_CER = { TZXD6: 314.05, X29E7: 104.16, TZXA7: 129.00, TZXY7: 127.05, TZX27: 415.50, TZXS7: 112.60, TZXO7: 101.90, TZXD7: 291.35, TZXM8: 104.65, TZX28: 364.15, TZXS8: 98.18, TZXD8: 87.82, TZXM9: 93.45,
  TZXM7: 233.80, X30N6: 129.11, TX26: 763.50, TX28: 1817, TX31: 1472, DICP: 49065, PARP: 34050, CUAP: 39875 };

// Pendientes de carga: bonos sin base CER todavía. Formato: TICKER: 'AAAA-MM-DD' (vencimiento). Vacío = no se muestra el aviso.
window.BONOS_CER_PENDIENTES = {};
