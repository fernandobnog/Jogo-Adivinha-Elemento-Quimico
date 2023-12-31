export type PeriodicElement = {
  ID: number;
  simbolo: string;
  nome: string;
  numero_atomico: number;
  massa_atomica: number;
  familia: string;
};

export const periodicTable = [
  { "ID": 1, "simbolo": "H", "nome": "Hidrogênio", "numero_atomico": 1, "massa_atomica": 1.00794, "familia": "Não-metal" },
  { "ID": 2, "simbolo": "He", "nome": "Hélio", "numero_atomico": 2, "massa_atomica": 4.0026, "familia": "Gases Nobres" },
  { "ID": 3, "simbolo": "Li", "nome": "Lítio", "numero_atomico": 3, "massa_atomica": 6.94, "familia": "Alcalinos" },
  { "ID": 4, "simbolo": "Be", "nome": "Berílio", "numero_atomico": 4, "massa_atomica": 9.0122, "familia": "Alcalino-terrosos" },
  { "ID": 5, "simbolo": "B", "nome": "Boro", "numero_atomico": 5, "massa_atomica": 10.81, "familia": "Metaloides" },
  { "ID": 6, "simbolo": "C", "nome": "Carbono", "numero_atomico": 6, "massa_atomica": 12.011, "familia": "No-mãetal" },
  { "ID": 7, "simbolo": "N", "nome": "Azoto", "numero_atomico": 7, "massa_atomica": 14.007, "familia": "Não-metal" },
  { "ID": 8, "simbolo": "O", "nome": "Oxigénio", "numero_atomico": 8, "massa_atomica": 15.999, "familia": "Não-metal" },
  { "ID": 9, "simbolo": "F", "nome": "Flúor", "numero_atomico": 9, "massa_atomica": 19.000, "familia": "Halogênios" },
  { "ID": 10, "simbolo": "Ne", "nome": "Neônio", "numero_atomico": 10, "massa_atomica": 20.180, "familia": "Gases Nobres" },
  { "ID": 11, "simbolo": "Na", "nome": "Sódio", "numero_atomico": 11, "massa_atomica": 22.9897, "familia": "Alcalinos" },
  { "ID": 12, "simbolo": "Mg", "nome": "Magnésio", "numero_atomico": 12, "massa_atomica": 24.305, "familia": "Alcalino-terrosos" },
  { "ID": 13, "simbolo": "Al", "nome": "Alumínio", "numero_atomico": 13, "massa_atomica": 26.9815, "familia": "Metais Pós-Transição" },
  { "ID": 14, "simbolo": "Si", "nome": "Silício", "numero_atomico": 14, "massa_atomica": 28.0855, "familia": "Metaloides" },
  { "ID": 15, "simbolo": "P", "nome": "Fósforo", "numero_atomico": 15, "massa_atomica": 30.9738, "familia": "Não-metal" },
  { "ID": 16, "simbolo": "S", "nome": "Enxofre", "numero_atomico": 16, "massa_atomica": 32.06, "familia": "Não-metal" },
  { "ID": 17, "simbolo": "Cl", "nome": "Cloro", "numero_atomico": 17, "massa_atomica": 35.45, "familia": "Halogênios" },
  { "ID": 18, "simbolo": "Ar", "nome": "Argônio", "numero_atomico": 18, "massa_atomica": 39.948, "familia": "Gases Nobres" },
  { "ID": 19, "simbolo": "K", "nome": "Potássio", "numero_atomico": 19, "massa_atomica": 39.0983, "familia": "Alcalinos" },
  { "ID": 20, "simbolo": "Ca", "nome": "Cálcio", "numero_atomico": 20, "massa_atomica": 40.078, "familia": "Alcalino-terrosos" },
  { "ID": 21, "simbolo": "Sc", "nome": "Escândio", "numero_atomico": 21, "massa_atomica": 44.9559, "familia": "Metais de Transição" },
  { "ID": 22, "simbolo": "Ti", "nome": "Titânio", "numero_atomico": 22, "massa_atomica": 47.867, "familia": "Metais de Transição" },
  { "ID": 23, "simbolo": "V", "nome": "Vanádio", "numero_atomico": 23, "massa_atomica": 50.9415, "familia": "Metais de Transição" },
  { "ID": 24, "simbolo": "Cr", "nome": "Cromo", "numero_atomico": 24, "massa_atomica": 52.00, "familia": "Metais de Transição" },
  { "ID": 25, "simbolo": "Mn", "nome": "Manganês", "numero_atomico": 25, "massa_atomica": 54.9380, "familia": "Metais de Transição" },
  { "ID": 26, "simbolo": "Fe", "nome": "Ferro", "numero_atomico": 26, "massa_atomica": 55.845, "familia": "Metais de Transição" },
  { "ID": 27, "simbolo": "Co", "nome": "Cobalto", "numero_atomico": 27, "massa_atomica": 58.9332, "familia": "Metais de Transição" },
  { "ID": 28, "simbolo": "Ni", "nome": "Níquel", "numero_atomico": 28, "massa_atomica": 58.6934, "familia": "Metais de Transição" },
  { "ID": 29, "simbolo": "Cu", "nome": "Cobre", "numero_atomico": 29, "massa_atomica": 63.546, "familia": "Metais de Transição" },
  { "ID": 30, "simbolo": "Zn", "nome": "Zinco", "numero_atomico": 30, "massa_atomica": 65.38, "familia": "Metais de Transição" },
  { "ID": 31, "simbolo": "Ga", "nome": "Gálio", "numero_atomico": 31, "massa_atomica": 69.723, "familia": "Metais Pós-Transição" },
  { "ID": 32, "simbolo": "Ge", "nome": "Germânio", "numero_atomico": 32, "massa_atomica": 72.64, "familia": "Metaloides" },
  { "ID": 33, "simbolo": "As", "nome": "Arsênio", "numero_atomico": 33, "massa_atomica": 74.9216, "familia": "Metaloides" },
  { "ID": 34, "simbolo": "Se", "nome": "Selênio", "numero_atomico": 34, "massa_atomica": 78.971, "familia": "Não-metal" },
  { "ID": 35, "simbolo": "Br", "nome": "Bromo", "numero_atomico": 35, "massa_atomica": 79.904, "familia": "Halogênios" },
  { "ID": 36, "simbolo": "Kr", "nome": "Criptônio", "numero_atomico": 36, "massa_atomica": 83.798, "familia": "Gases Nobres" },
  { "ID": 37, "simbolo": "Rb", "nome": "Rubídio", "numero_atomico": 37, "massa_atomica": 85.4678, "familia": "Alcalinos" },
  { "ID": 38, "simbolo": "Sr", "nome": "Estrôncio", "numero_atomico": 38, "massa_atomica": 87.62, "familia": "Alcalino-terrosos" },
  { "ID": 39, "simbolo": "Y", "nome": "Ítrio", "numero_atomico": 39, "massa_atomica": 88.9058, "familia": "Metais de Transição" },
  { "ID": 40, "simbolo": "Zr", "nome": "Zircônio", "numero_atomico": 40, "massa_atomica": 91.224, "familia": "Metais de Transição" },
  { "ID": 41, "simbolo": "Nb", "nome": "Nióbio", "numero_atomico": 41, "massa_atomica": 92.9064, "familia": "Metais de Transição" },
  { "ID": 42, "simbolo": "Mo", "nome": "Molibdênio", "numero_atomico": 42, "massa_atomica": 95.95, "familia": "Metais de Transição" },
  { "ID": 43, "simbolo": "Tc", "nome": "Tecnécio", "numero_atomico": 43, "massa_atomica": 98, "familia": "Metais de Transição" },
  { "ID": 44, "simbolo": "Ru", "nome": "Rutênio", "numero_atomico": 44, "massa_atomica": 101.07, "familia": "Metais de Transição" },
  { "ID": 45, "simbolo": "Rh", "nome": "Ródio", "numero_atomico": 45, "massa_atomica": 102.9055, "familia": "Metais de Transição" },
  { "ID": 46, "simbolo": "Pd", "nome": "Paládio", "numero_atomico": 46, "massa_atomica": 106.42, "familia": "Metais de Transição" },
  { "ID": 47, "simbolo": "Ag", "nome": "Prata", "numero_atomico": 47, "massa_atomica": 107.8682, "familia": "Metais de Transição" },
  { "ID": 48, "simbolo": "Cd", "nome": "Cádmio", "numero_atomico": 48, "massa_atomica": 112.414, "familia": "Metais de Transição" },
  { "ID": 49, "simbolo": "In", "nome": "Índio", "numero_atomico": 49, "massa_atomica": 114.818, "familia": "Metais Pós-Transição" },
  { "ID": 50, "simbolo": "Sn", "nome": "Estanho", "numero_atomico": 50, "massa_atomica": 118.710, "familia": "Metais Pós-Transição" },
  { "ID": 51, "simbolo": "Sb", "nome": "Antimônio", "numero_atomico": 51, "massa_atomica": 121.760, "familia": "Metaloides" },
  { "ID": 52, "simbolo": "Te", "nome": "Telúrio", "numero_atomico": 52, "massa_atomica": 127.60, "familia": "Metaloides" },
  { "ID": 53, "simbolo": "I", "nome": "Iodo", "numero_atomico": 53, "massa_atomica": 126.9045, "familia": "Halogênios" },
  { "ID": 54, "simbolo": "Xe", "nome": "Xenônio", "numero_atomico": 54, "massa_atomica": 131.293, "familia": "Gases Nobres" },
  { "ID": 55, "simbolo": "Cs", "nome": "Césio", "numero_atomico": 55, "massa_atomica": 132.9055, "familia": "Alcalinos" },
  { "ID": 56, "simbolo": "Ba", "nome": "Bário", "numero_atomico": 56, "massa_atomica": 137.327, "familia": "Alcalino-terrosos" },
  { "ID": 57, "simbolo": "La", "nome": "Lantânio", "numero_atomico": 57, "massa_atomica": 138.9055, "familia": "Lantanídeos" },
  { "ID": 58, "simbolo": "Ce", "nome": "Cério", "numero_atomico": 58, "massa_atomica": 140.116, "familia": "Lantanídeos" },
  { "ID": 59, "simbolo": "Pr", "nome": "Praseodímio", "numero_atomico": 59, "massa_atomica": 140.9077, "familia": "Lantanídeos" },
  { "ID": 60, "simbolo": "Nd", "nome": "Neodímio", "numero_atomico": 60, "massa_atomica": 144.242, "familia": "Lantanídeos" },
  { "ID": 61, "simbolo": "Pm", "nome": "Promécio", "numero_atomico": 61, "massa_atomica": 145, "familia": "Lantanídeos" },
  { "ID": 62, "simbolo": "Sm", "nome": "Samário", "numero_atomico": 62, "massa_atomica": 150.36, "familia": "Lantanídeos" },
  { "ID": 63, "simbolo": "Eu", "nome": "Európio", "numero_atomico": 63, "massa_atomica": 151.964, "familia": "Lantanídeos" },
  { "ID": 64, "simbolo": "Gd", "nome": "Gadolínio", "numero_atomico": 64, "massa_atomica": 157.25, "familia": "Lantanídeos" },
  { "ID": 65, "simbolo": "Tb", "nome": "Térbio", "numero_atomico": 65, "massa_atomica": 158.9254, "familia": "Lantanídeos" },
  { "ID": 66, "simbolo": "Dy", "nome": "Disprósio", "numero_atomico": 66, "massa_atomica": 162.500, "familia": "Lantanídeos" },
  { "ID": 67, "simbolo": "Ho", "nome": "Hólmio", "numero_atomico": 67, "massa_atomica": 164.9303, "familia": "Lantanídeos" },
  { "ID": 68, "simbolo": "Er", "nome": "Érbio", "numero_atomico": 68, "massa_atomica": 167.259, "familia": "Lantanídeos" },
  { "ID": 69, "simbolo": "Tm", "nome": "Túlio", "numero_atomico": 69, "massa_atomica": 168.9342, "familia": "Lantanídeos" },
  { "ID": 70, "simbolo": "Yb", "nome": "Itérbio", "numero_atomico": 70, "massa_atomica": 173.045, "familia": "Lantanídeos" },
  { "ID": 71, "simbolo": "Lu", "nome": "Lutécio", "numero_atomico": 71, "massa_atomica": 174.9668, "familia": "Lantanídeos" },
  { "ID": 72, "simbolo": "Hf", "nome": "Háfnio", "numero_atomico": 72, "massa_atomica": 178.49, "familia": "Metais de Transição" },
  { "ID": 73, "simbolo": "Ta", "nome": "Tântalo", "numero_atomico": 73, "massa_atomica": 180.9479, "familia": "Metais de Transição" },
  { "ID": 74, "simbolo": "W", "nome": "Tungstênio", "numero_atomico": 74, "massa_atomica": 183.84, "familia": "Metais de Transição" },
  { "ID": 75, "simbolo": "Re", "nome": "Rênio", "numero_atomico": 75, "massa_atomica": 186.207, "familia": "Metais de Transição" },
  { "ID": 76, "simbolo": "Os", "nome": "Ósmio", "numero_atomico": 76, "massa_atomica": 190.23, "familia": "Metais de Transição" },
  { "ID": 77, "simbolo": "Ir", "nome": "Irídio", "numero_atomico": 77, "massa_atomica": 192.217, "familia": "Metais de Transição" },
  { "ID": 78, "simbolo": "Pt", "nome": "Platina", "numero_atomico": 78, "massa_atomica": 195.084, "familia": "Metais de Transição" },
  { "ID": 79, "simbolo": "Au", "nome": "Ouro", "numero_atomico": 79, "massa_atomica": 196.9666, "familia": "Metais de Transição" },
  { "ID": 80, "simbolo": "Hg", "nome": "Mercúrio", "numero_atomico": 80, "massa_atomica": 200.592, "familia": "Metais de Transição" },
  { "ID": 81, "simbolo": "Tl", "nome": "Tálio", "numero_atomico": 81, "massa_atomica": 204.38, "familia": "Metais Pós-Transição" },
  { "ID": 82, "simbolo": "Pb", "nome": "Chumbo", "numero_atomico": 82, "massa_atomica": 207.2, "familia": "Metais Pós-Transição" },
  { "ID": 83, "simbolo": "Bi", "nome": "Bismuto", "numero_atomico": 83, "massa_atomica": 208.9804, "familia": "Metais Pós-Transição" },
  { "ID": 84, "simbolo": "Po", "nome": "Polônio", "numero_atomico": 84, "massa_atomica": 209, "familia": "Metaloides" },
  { "ID": 85, "simbolo": "At", "nome": "Astato", "numero_atomico": 85, "massa_atomica": 210, "familia": "Halogênios" },
  { "ID": 86, "simbolo": "Rn", "nome": "Radônio", "numero_atomico": 86, "massa_atomica": 222, "familia": "Gases Nobres" },
  { "ID": 87, "simbolo": "Fr", "nome": "Frâncio", "numero_atomico": 87, "massa_atomica": 223, "familia": "Metais Alcalinos" },
  { "ID": 88, "simbolo": "Ra", "nome": "Rádio", "numero_atomico": 88, "massa_atomica": 226, "familia": "Metais Alcalino-terrosos" },
  { "ID": 89, "simbolo": "Ac", "nome": "Actínio", "numero_atomico": 89, "massa_atomica": 227, "familia": "Actinídeos" },
  { "ID": 90, "simbolo": "Th", "nome": "Tório", "numero_atomico": 90, "massa_atomica": 232.03805, "familia": "Actinídeos" },
  { "ID": 91, "simbolo": "Pa", "nome": "Protactínio", "numero_atomico": 91, "massa_atomica": 231.03588, "familia": "Actinídeos" },
  { "ID": 92, "simbolo": "U", "nome": "Urânio", "numero_atomico": 92, "massa_atomica": 238.02891, "familia": "Actinídeos" },
  { "ID": 93, "simbolo": "Np", "nome": "Neptúnio", "numero_atomico": 93, "massa_atomica": 237, "familia": "Actinídeos" },
  { "ID": 94, "simbolo": "Pu", "nome": "Plutônio", "numero_atomico": 94, "massa_atomica": 244, "familia": "Actinídeos" },
  { "ID": 95, "simbolo": "Am", "nome": "Amerício", "numero_atomico": 95, "massa_atomica": 243, "familia": "Actinídeos" },
  { "ID": 96, "simbolo": "Cm", "nome": "Cúrio", "numero_atomico": 96, "massa_atomica": 247, "familia": "Actinídeos" },
  { "ID": 97, "simbolo": "Bk", "nome": "Berquélio", "numero_atomico": 97, "massa_atomica": 247, "familia": "Actinídeos" },
  { "ID": 98, "simbolo": "Cf", "nome": "Califórnio", "numero_atomico": 98, "massa_atomica": 251, "familia": "Actinídeos" },
  { "ID": 99, "simbolo": "Es", "nome": "Einstênio", "numero_atomico": 99, "massa_atomica": 252, "familia": "Actinídeos" },
  { "ID": 100, "simbolo": "Fm", "nome": "Férmio", "numero_atomico": 100, "massa_atomica": 257, "familia": "Actinídeos" },
  { "ID": 101, "simbolo": "Md", "nome": "Mendelévio", "numero_atomico": 101, "massa_atomica": 258, "familia": "Actinídeos" },
  { "ID": 102, "simbolo": "No", "nome": "Nobélio", "numero_atomico": 102, "massa_atomica": 259, "familia": "Actinídeos" },
  { "ID": 103, "simbolo": "Lr", "nome": "Laurêncio", "numero_atomico": 103, "massa_atomica": 262, "familia": "Actinídeos" },
  { "ID": 104, "simbolo": "Rf", "nome": "Rutherfórdio", "numero_atomico": 104, "massa_atomica": 267, "familia": "Metais de Transição" },
  { "ID": 105, "simbolo": "Db", "nome": "Dúbnio", "numero_atomico": 105, "massa_atomica": 270, "familia": "Metais de Transição" },
  { "ID": 106, "simbolo": "Sg", "nome": "Seabórgio", "numero_atomico": 106, "massa_atomica": 271, "familia": "Metais de Transição" },
  { "ID": 107, "simbolo": "Bh", "nome": "Bóhrio", "numero_atomico": 107, "massa_atomica": 270, "familia": "Metais de Transição" },
  { "ID": 108, "simbolo": "Hs", "nome": "Hássio", "numero_atomico": 108, "massa_atomica": 277, "familia": "Metais de Transição" },
  { "ID": 109, "simbolo": "Mt", "nome": "Meitnério", "numero_atomico": 109, "massa_atomica": 276, "familia": "Metais de Transição" },
  { "ID": 110, "simbolo": "Ds", "nome": "Darmstádtio", "numero_atomico": 110, "massa_atomica": 281, "familia": "Metais de Transição" },
  { "ID": 111, "simbolo": "Rg", "nome": "Roentgênio", "numero_atomico": 111, "massa_atomica": 280, "familia": "Metais de Transição" },
  { "ID": 112, "simbolo": "Cn", "nome": "Copernício", "numero_atomico": 112, "massa_atomica": 285, "familia": "Metais de Transição" },
  { "ID": 113, "simbolo": "Nh", "nome": "Nihônio", "numero_atomico": 113, "massa_atomica": 286, "familia": "Metais do Bloco P" },
  { "ID": 114, "simbolo": "Fl", "nome": "Fleróvio", "numero_atomico": 114, "massa_atomica": 289, "familia": "Metais do Bloco P" },
  { "ID": 115, "simbolo": "Mc", "nome": "Moscóvio", "numero_atomico": 115, "massa_atomica": 288, "familia": "Metais do Bloco P" },
  { "ID": 116, "simbolo": "Lv", "nome": "Livermório", "numero_atomico": 116, "massa_atomica": 293, "familia": "Metais do Bloco P" },
  { "ID": 117, "simbolo": "Ts", "nome": "Tenessino", "numero_atomico": 117, "massa_atomica": 294, "familia": "Halogênios" },
  { "ID": 118, "simbolo": "Og", "nome": "Oganessônio", "numero_atomico": 118, "massa_atomica": 294, "familia": "Gases Nobres" }
] as PeriodicElement[];

