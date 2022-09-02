

INSERT INTO testero_core.risposta VALUES (77, 'Giusta', 1.0000, 76);
INSERT INTO testero_core.risposta VALUES (78, 'Sbagliata', 0.0000, 76);

---------------------- TEST ----------------------

INSERT INTO testero_core.test VALUES (1, '16:35:57.802316', 'Test A', true, true);
INSERT INTO testero_core.test VALUES (2, '17:12:07.636959', 'Test B', true, false);
INSERT INTO testero_core.test VALUES (3, '14:30:37.297855', 'Test C', false, true);
INSERT INTO testero_core.test VALUES (4, '14:30:37.297855', 'Test D', false, false);

---------------------- DOMANDA ----------------------

INSERT INTO testero_core.domanda VALUES (1, 'Domanda A1', 'Che tempo fa?', 10.00, true, false);
INSERT INTO testero_core.domanda VALUES (2, 'Domanda A2', 'Che colore è?', 10.00, false, true);
INSERT INTO testero_core.domanda VALUES (3, 'Domanda A3', 'Che ore sono?', 10.00, false, true);

INSERT INTO testero_core.domanda VALUES (4, 'Domanda B1', 'Dove siamo?', 10.00, false, true);
INSERT INTO testero_core.domanda VALUES (5, 'Domanda B2', 'Chi sei?', 10.00, true, true);
INSERT INTO testero_core.domanda VALUES (6, 'Domanda B3', 'Chi sono io?', 10.00, false, false);

INSERT INTO testero_core.domanda VALUES (7, 'Domanda C1', 'Ma dov`è?', 10.00, false, false);
INSERT INTO testero_core.domanda VALUES (8, 'Domanda C2', 'Ma perchè?', 10.00, true, true);
INSERT INTO testero_core.domanda VALUES (9, 'Domanda C3', 'Sette per otto?', 10.00, false, false);

INSERT INTO testero_core.domanda VALUES (10, 'Domanda D1', 'Chi siete?', 10.00, true, true);
INSERT INTO testero_core.domanda VALUES (11, 'Domanda D2', 'Cosa fate portate?', 10.00, false, false);
INSERT INTO testero_core.domanda VALUES (12, 'Domanda D3', 'Quanti fiorino?', 10.00, true, false);

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
INSERT INTO testero_core.risposta VALUES (1, 'Sole', 1.0000, 1);
INSERT INTO testero_core.risposta VALUES (2, 'Pioggia', 0.0000, 1);
INSERT INTO testero_core.risposta VALUES (3, 'Neve', 0.0000, 1);

INSERT INTO testero_core.risposta VALUES (4, 'Giallo', 0.5000, 2);
INSERT INTO testero_core.risposta VALUES (5, 'Rosso', 1.0000, 2);
INSERT INTO testero_core.risposta VALUES (6, 'Verde', 0.0000, 2);

INSERT INTO testero_core.risposta VALUES (7, 'Mezzogiorno', 1.0000, 3);
INSERT INTO testero_core.risposta VALUES (8, 'Mattina', 0.0000, 3);
INSERT INTO testero_core.risposta VALUES (9, 'Sera', 0.0000, 3);

----- Test B
INSERT INTO testero_core.risposta VALUES (10, 'Roma', 0.0000, 4);
INSERT INTO testero_core.risposta VALUES (11, 'Milano', 0.0000, 4);
INSERT INTO testero_core.risposta VALUES (12, 'Verona', 1.0000, 4);

INSERT INTO testero_core.risposta VALUES (13, 'Studente', 0.0000, 5);
INSERT INTO testero_core.risposta VALUES (14, 'Insegnante', 0.0000, 5);
INSERT INTO testero_core.risposta VALUES (15, 'Nessuna delle precedenti', 1.0000, 5);

INSERT INTO testero_core.risposta VALUES (16, 'Mario', 0.0000, 6);
INSERT INTO testero_core.risposta VALUES (17, 'Luigi', 0.0000, 6);
INSERT INTO testero_core.risposta VALUES (18, 'Computer', 1.0000, 6);

----- Test C
INSERT INTO testero_core.risposta VALUES (19, 'Lab Alfa', 0.0000, 7);
INSERT INTO testero_core.risposta VALUES (20, 'Aula H', 0.0000, 7);
INSERT INTO testero_core.risposta VALUES (21, 'Al clipper', 1.0000, 7);

INSERT INTO testero_core.risposta VALUES (22, 'Per la patria', 0.0000, 8);
INSERT INTO testero_core.risposta VALUES (23, 'Per la gloria', 0.0000, 8);
INSERT INTO testero_core.risposta VALUES (24, 'Per i CFU', 1.0000, 8);

INSERT INTO testero_core.risposta VALUES (25, 'Non siamo a matematica', 0.0000, 9);
INSERT INTO testero_core.risposta VALUES (26, 'Alexa cosa fa 7 per 8 ?', 0.0000, 9);
INSERT INTO testero_core.risposta VALUES (27, 'https://www.wolframalpha.com/input/?i=7x8', 1.0000, 9);

----- Test D
INSERT INTO testero_core.risposta VALUES (28, 'Siamo due che...', 1.0000, 10);
INSERT INTO testero_core.risposta VALUES (29, 'No ma sempre uno', 0.5000, 10);
INSERT INTO testero_core.risposta VALUES (30, 'Ma sono quello di prima', 0.5000, 10);

INSERT INTO testero_core.risposta VALUES (31, 'Caciotta, pane...', 1.0000, 11);S
INSERT INTO testero_core.risposta VALUES (32, 'Forbici e forbinice', 0.0000, 11);
INSERT INTO testero_core.risposta VALUES (33, 'Coltelli da prosciutto', 0.0000, 11);

INSERT INTO testero_core.risposta VALUES (34, 'Tre fiorini', 0.0000, 12);
INSERT INTO testero_core.risposta VALUES (35, 'Un fiorino', 1.0000, 12);
INSERT INTO testero_core.risposta VALUES (36, 'Due fiorini', 0.0000, 12);




