---------------------- TEST ----------------------

INSERT INTO testero_core.test VALUES (1, '2022-09-01T16:35:57.802316', 'Test di Fisica', true, true, true);
INSERT INTO testero_core.test VALUES (2, '2022-09-01T17:12:07.636959', 'Test di Conoscenza generale', true, false, true);
INSERT INTO testero_core.test VALUES (3, '2022-09-01T14:30:37.297855', 'Test di Conoscenza generale - parte 2', false, true, true);
INSERT INTO testero_core.test VALUES (4, '2022-09-01T14:30:37.297855', 'Test di Economia', false, false, true);

---------------------- DOMANDA ----------------------

INSERT INTO testero_core.domanda VALUES (1, 'Domanda A1', 'Un treno che viaggia alla velocità di 60 km/h attraversa un palo in 9 secondi. Qual è la lunghezza del treno?', 10.00, true, false);
INSERT INTO testero_core.domanda VALUES (2, 'Domanda A2', 'Un treno lungo 125 m passa un uomo, correndo a 5 km/h nella stessa direzione in cui sta andando il treno, in 10 secondi. La velocità del treno è:', 10.00, false, true);
INSERT INTO testero_core.domanda VALUES (3, 'Domanda A3', 'La lunghezza del ponte, che un treno lungo 130 metri e che viaggia a 45 km/h può attraversare in 30 secondi, è:', 10.00, false, true);

INSERT INTO testero_core.domanda VALUES (4, 'Domanda B1', 'L''entomologia è la scienza che studia: ', 15.00, false, true);
INSERT INTO testero_core.domanda VALUES (5, 'Domanda B2', 'L''Eritrea, che è diventata il 182° membro delle Nazioni Unite nel 1993, si trova in: ', 7.00, true, true);
INSERT INTO testero_core.domanda VALUES (6, 'Domanda B3', 'Per quale delle seguenti discipline viene assegnato il Premio Nobel?', 8.00, false, false);

INSERT INTO testero_core.domanda VALUES (7, 'Domanda C1', 'In quale anno della prima guerra mondiale la Germania dichiarò guerra alla Russia e alla Francia??', 10.00, false, false);
INSERT INTO testero_core.domanda VALUES (8, 'Domanda C2', 'L''India ha i più grandi depositi di ____ nel mondo.', 10.00, true, true);
INSERT INTO testero_core.domanda VALUES (9, 'Domanda C3', 'Durante la seconda guerra mondiale, quando la Germania attaccò la Francia?', 10.00, false, false);

INSERT INTO testero_core.domanda VALUES (10, 'Domanda D1', 'Il concetto fondamentale dell''Economia sulle risorse è che le risorse sono: ', 50.00, true, true);
INSERT INTO testero_core.domanda VALUES (11, 'Domanda D2', 'Chi è considerato il fondatore della Microeconomia?', 20.00, false, false);
INSERT INTO testero_core.domanda VALUES (12, 'Domanda D3', 'Chi è considerato il fondatore della Macroeconomia moderna?', 30.00, true, false);

---------------------- IN TEST ----------------------

INSERT INTO testero_core.in_test VALUES (1, 1);
INSERT INTO testero_core.in_test VALUES (1, 2);
INSERT INTO testero_core.in_test VALUES (1, 3);

INSERT INTO testero_core.in_test VALUES (2, 4);
INSERT INTO testero_core.in_test VALUES (2, 5);
INSERT INTO testero_core.in_test VALUES (2, 6);

INSERT INTO testero_core.in_test VALUES (3, 7);
INSERT INTO testero_core.in_test VALUES (3, 8);
INSERT INTO testero_core.in_test VALUES (3, 9);

INSERT INTO testero_core.in_test VALUES (4, 10);
INSERT INTO testero_core.in_test VALUES (4, 11);
INSERT INTO testero_core.in_test VALUES (4, 12);

---------------------- RISPOSTA ----------------------

----- Test A
INSERT INTO testero_core.risposta VALUES (1, '150 metri', 1.0000, 1);
INSERT INTO testero_core.risposta VALUES (2, '200 metri', 0.0000, 1);
INSERT INTO testero_core.risposta VALUES (3, '100 metri', 0.0000, 1);
INSERT INTO testero_core.risposta VALUES (4, '300 metri', 0.0000, 1);
INSERT INTO testero_core.risposta VALUES (5, '10 metri', 0.0000, 1);

INSERT INTO testero_core.risposta VALUES (6, '48 km/h', 0.5000, 2);
INSERT INTO testero_core.risposta VALUES (7, '50 km/h', 1.0000, 2);
INSERT INTO testero_core.risposta VALUES (8, '59 km/h', 0.0000, 2);

INSERT INTO testero_core.risposta VALUES (9, '2450 dm', 1.0000, 3);
INSERT INTO testero_core.risposta VALUES (10, '100 m', 0.0000, 3);
INSERT INTO testero_core.risposta VALUES (11, '245 m', 1.0000, 3);

----- Test B
INSERT INTO testero_core.risposta VALUES (12, 'Il comportamento degli esseri umani', 0.0000, 4);
INSERT INTO testero_core.risposta VALUES (13, 'La formazione delle rocce', 0.0000, 4);
INSERT INTO testero_core.risposta VALUES (14, 'Gli insetti', 1.0000, 4);

INSERT INTO testero_core.risposta VALUES (15, 'Europa', 0.0000, 5);
INSERT INTO testero_core.risposta VALUES (16, 'Asia', 0.0000, 5);
INSERT INTO testero_core.risposta VALUES (17, 'Africa', 1.0000, 5);

INSERT INTO testero_core.risposta VALUES (18, 'Fisica e Chimica', 0.3000, 6);
INSERT INTO testero_core.risposta VALUES (19, 'Psicologia o Medicina', 0.3000, 6);
INSERT INTO testero_core.risposta VALUES (20, 'Tutte quelle riportate', 1.0000, 6);

----- Test C
INSERT INTO testero_core.risposta VALUES (21, '1916', 0.0000, 7);
INSERT INTO testero_core.risposta VALUES (22, '1915', 0.0000, 7);
INSERT INTO testero_core.risposta VALUES (23, '1914', 1.0000, 7);

INSERT INTO testero_core.risposta VALUES (24, 'Carbone', 0.0000, 8);
INSERT INTO testero_core.risposta VALUES (25, 'Oro', 0.0000, 8);
INSERT INTO testero_core.risposta VALUES (26, 'Mica', 1.0000, 8);

INSERT INTO testero_core.risposta VALUES (27, '1940', 1.0000, 9);
INSERT INTO testero_core.risposta VALUES (28, '1939', 0.0000, 9);
INSERT INTO testero_core.risposta VALUES (29, '1941', 0.0000, 9);

----- Test D
INSERT INTO testero_core.risposta VALUES (30, 'Scarse', 1.0000, 10);
INSERT INTO testero_core.risposta VALUES (31, 'Equamente distribuite', 0.0000, 10);
INSERT INTO testero_core.risposta VALUES (32, 'Non equamente distribuite', 0.0000, 10);

INSERT INTO testero_core.risposta VALUES (33, 'Adam Smith', 1.0000, 11);
INSERT INTO testero_core.risposta VALUES (34, ' John Keynes', 0.0000, 11);
INSERT INTO testero_core.risposta VALUES (35, 'Milton Friedman', 0.0000, 11);

INSERT INTO testero_core.risposta VALUES (36, 'Milton Friedman', 0.0000, 12);
INSERT INTO testero_core.risposta VALUES (37, ' John Keynes', 1.0000, 12);
INSERT INTO testero_core.risposta VALUES (38, 'Adam Smith', 0.0000, 12);




