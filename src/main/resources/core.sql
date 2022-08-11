-- Table: testero_core.domanda

-- DROP TABLE IF EXISTS testero_core.domanda;

CREATE TABLE IF NOT EXISTS testero_core.domanda
(
    id integer NOT NULL DEFAULT nextval('domanda_id_seq'::regclass),
    nome character varying COLLATE pg_catalog."default" NOT NULL,
    testo character varying COLLATE pg_catalog."default" NOT NULL,
    punti numeric(5,2),
    ordinecasuale boolean DEFAULT false,
    risposteconnumero boolean DEFAULT false,
    CONSTRAINT domanda_pkey PRIMARY KEY (nome)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS testero_core.domanda OWNER to testero_core;



-- Table: testero_core.in_test

-- DROP TABLE IF EXISTS testero_core.in_test;

CREATE TABLE IF NOT EXISTS testero_core.in_test
(
    domanda character varying COLLATE pg_catalog."default",
    datatest timestamp without time zone NOT NULL,
    nometest character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT in_test_datatest_nometest_fkey FOREIGN KEY (datatest, nometest)
        REFERENCES testero_core.test (data, nome) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT in_test_domanda_fkey FOREIGN KEY (domanda)
        REFERENCES testero_core.domanda (nome) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS testero_core.in_test OWNER to testero_core;


-- Table: testero_core.risposta

-- DROP TABLE IF EXISTS testero_core.risposta;

CREATE TABLE IF NOT EXISTS testero_core.risposta
(
    id integer NOT NULL DEFAULT nextval('risposta_id_seq'::regclass),
    testo character varying COLLATE pg_catalog."default" NOT NULL,
    punteggio numeric(5,4),
    domanda character varying COLLATE pg_catalog."default",
    CONSTRAINT risposta_pkey PRIMARY KEY (id),
    CONSTRAINT risposta_domanda_fkey FOREIGN KEY (domanda)
        REFERENCES testero_core.domanda (nome) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT risposta_punteggio_check CHECK (punteggio <= 1.0)
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS testero_core.risposta OWNER to testero_core;


-- Table: testero_core.test

-- DROP TABLE IF EXISTS testero_core.test;

CREATE TABLE IF NOT EXISTS testero_core.test
(
    data timestamp without time zone NOT NULL,
    nome character varying COLLATE pg_catalog."default" NOT NULL,
    ordinecasuale boolean DEFAULT false,
    domandeconnumero boolean DEFAULT false,
    CONSTRAINT test_pkey PRIMARY KEY (data, nome)
)

    TABLESPACE pg_default;

ALTER TABLE IF EXISTS testero_core.test OWNER to testero_core;



CREATE SEQUENCE hibernate_sequence START 1;

