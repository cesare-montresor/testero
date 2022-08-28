-- Table: testero_core.compilazione

-- DROP TABLE IF EXISTS testero_core.compilazione;

CREATE TABLE IF NOT EXISTS testero_core.compilazione
(
    id integer NOT NULL PRIMARY KEY,
    datatest timestamp without time zone NOT NULL,
    nometest character varying COLLATE pg_catalog."default" NOT NULL,
    completo boolean NOT NULL DEFAULT false,
    user_id bigint NOT NULL,
    CONSTRAINT compilazione_datatest_nometest_key UNIQUE (datatest, nometest)
)

    TABLESPACE pg_default;

ALTER TABLE IF EXISTS testero_core.compilazione
    OWNER to testero_core;

-- Table: testero_core.compilazione_risposta

-- DROP TABLE IF EXISTS testero_core.compilazione_risposta;

CREATE TABLE IF NOT EXISTS testero_core.compilazione_risposta
(
    id integer NOT NULL PRIMARY KEY ,
    compilazione integer NOT NULL,
    domanda integer NOT NULL,
    risposta integer NOT NULL
)

    TABLESPACE pg_default;

ALTER TABLE IF EXISTS testero_core.compilazione_risposta
    OWNER to testero_core;


-- Table: testero_core.domanda

-- DROP TABLE IF EXISTS testero_core.domanda;

CREATE TABLE IF NOT EXISTS testero_core.domanda
(
    id integer NOT NULL PRIMARY KEY ,
    nome character varying COLLATE pg_catalog."default" NOT NULL,
    testo character varying COLLATE pg_catalog."default" NOT NULL,
    punti numeric(5,2),
    ordinecasuale boolean DEFAULT false,
    risposteconnumero boolean DEFAULT false,
    CONSTRAINT domanda_nome_key UNIQUE (nome)
)

    TABLESPACE pg_default;

ALTER TABLE IF EXISTS testero_core.domanda
    OWNER to testero_core;


-- Table: testero_core.in_test

-- DROP TABLE IF EXISTS testero_core.in_test;

CREATE TABLE IF NOT EXISTS testero_core.in_test
(
    test_id bigint NOT NULL ,
    domanda_id bigint NOT NULL,
    CONSTRAINT in_test_pkey PRIMARY KEY (test_id, domanda_id)
)

    TABLESPACE pg_default;

ALTER TABLE IF EXISTS testero_core.in_test
    OWNER to testero_core;



-- Table: testero_core.risposta

-- DROP TABLE IF EXISTS testero_core.risposta;

CREATE TABLE IF NOT EXISTS testero_core.risposta
(
    id integer NOT NULL PRIMARY KEY,
    testo character varying COLLATE pg_catalog."default" NOT NULL,
    punteggio numeric(5,4),
    domanda character varying COLLATE pg_catalog."default",
    CONSTRAINT risposta_punteggio_check CHECK (punteggio <= 1.0)
)

    TABLESPACE pg_default;

ALTER TABLE IF EXISTS testero_core.risposta
    OWNER to testero_core;



-- Table: testero_core.test

-- DROP TABLE IF EXISTS testero_core.test;

CREATE TABLE IF NOT EXISTS testero_core.test
(
    id integer NOT NULL PRIMARY KEY ,
    data bigint NOT NULL,
    nome character varying COLLATE pg_catalog."default" NOT NULL,
    ordinecasuale boolean DEFAULT false,
    domandeconnumero boolean DEFAULT false,
    CONSTRAINT test_data_nome_key UNIQUE (data, nome)
)

    TABLESPACE pg_default;

ALTER TABLE IF EXISTS testero_core.test
    OWNER to testero_core;

















CREATE SEQUENCE hibernate_sequence START 1;

