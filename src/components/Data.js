const Data = (quizId) => {
    const questions = {
        'Tierra': [{
            "question": "¿Qué porcentaje de la superficie de la Tierra está cubierta de agua?",
            "resuelta": false,
            "answers": ["50%", "70%", "90%", "30%"],
            "correctAnswer": 1
        }, {
            "question": "¿Cuál es el satélite natural de la Tierra?",
            "resuelta": false,
            "answers": ["Marte", "La Luna", "Europa", "Fobos"],
            "correctAnswer": 1
        }, {
            "question": "¿Cuál es la composición de la atmósfera terrestre?",
            "resuelta": false,
            "answers": ["Mayormente oxígeno", "Mayormente nitrógeno", "Mayormente dióxido de carbono", "Mayormente helio"],
            "correctAnswer": 1
        }, {
            "question": "¿Cuál es la temperatura media global de la Tierra?",
            "resuelta": false,
            "answers": ["14°C", "50°C", "0°C", "25°C"],
            "correctAnswer": 0
        }, {
            "question": "¿Cuánto tarda la Tierra en completar una órbita alrededor del Sol?",
            "resuelta": false,
            "answers": ["30 días", "365 días", "730 días", "180 días"],
            "correctAnswer": 1
        }],
        '51-Pegasi-b': [{
            "question": "¿Qué tipo de planeta es 51 Pegasi b?",
            "resuelta": false,
            "answers": ["Gigante gaseoso", "Planeta rocoso", "Planeta de agua", "Enano helado"],
            "correctAnswer": 0
        }, {
            "question": "¿Cuál es el período orbital de 51 Pegasi b?",
            "resuelta": false,
            "answers": ["10 días", "365 días", "4.2 días", "48 horas"],
            "correctAnswer": 2
        }, {
            "question": "¿A qué distancia está 51 Pegasi b de su estrella?",
            "resuelta": false,
            "answers": ["0.05 UA", "1 UA", "0.85 UA", "5 UA"],
            "correctAnswer": 0
        }, {
            "question": "¿Cuál fue la importancia del descubrimiento de 51 Pegasi b?",
            "resuelta": false,
            "answers": ["Primer exoplaneta descubierto alrededor de una estrella similar al Sol", "Primer planeta enano descubierto", "Primer planeta interestelar descubierto", "Primer planeta rocoso descubierto"],
            "correctAnswer": 0
        }, {
            "question": "¿Cuál es el nombre alternativo de 51 Pegasi b?",
            "resuelta": false,
            "answers": ["Bellerophon", "Proxima b", "Gliese 581g", "Kepler-22b"],
            "correctAnswer": 0
        }],
        'Kepler-452b': [{
            "question": "¿En qué año fue descubierto Kepler-452b?",
            "resuelta": false,
            "answers": ["2015", "2009", "2020", "2011"],
            "correctAnswer": 0
        }, {
            "question": "¿En qué zona se encuentra Kepler-452b respecto a su estrella?",
            "resuelta": false,
            "answers": ["En la zona habitable", "En la zona de hielo", "Demasiado cerca para tener agua líquida", "Fuera de la zona habitable"],
            "correctAnswer": 0
        }, {
            "question": "¿Qué tipo de estrella orbita Kepler-452b?",
            "resuelta": false,
            "answers": ["Enana roja", "Gigante roja", "Estrella similar al Sol", "Estrella de neutrones"],
            "correctAnswer": 2
        }, {
            "question": "¿Cuál es el tamaño aproximado de Kepler-452b comparado con la Tierra?",
            "resuelta": false,
            "answers": ["Igual que la Tierra", "1.5 veces el tamaño de la Tierra", "5 veces el tamaño de la Tierra", "10 veces el tamaño de la Tierra"],
            "correctAnswer": 1
        }, {
            "question": "¿Qué posibilidad tiene Kepler-452b de tener condiciones de vida?",
            "resuelta": false,
            "answers": ["Alta", "Media", "Baja", "Desconocida"],
            "correctAnswer": 3
        }],
        'Kepler-22b': [
            {
                "question": "¿En qué año fue descubierto Kepler 22b?",
                "resuelta": false,
                "answers": [
                    "2009",
                    "2011",
                    "2005",
                    "2013"
                ],
                "correctAnswer": 1
            },
            {
                "question": "¿Cuál es la principal característica de Kepler 22b que lo hace interesante?",
                "resuelta": false,
                "answers": [
                    "Está en la zona habitable",
                    "Tiene una luna gigante",
                    "Es un planeta helado",
                    "Es el planeta más cercano a la Tierra"
                ],
                "correctAnswer": 0
            },
            {
                "question": "¿Cuál es el tamaño aproximado de Kepler 22b comparado con la Tierra?",
                "resuelta": false,
                "answers": [
                    "1.5 veces el tamaño de la Tierra",
                    "2.4 veces el tamaño de la Tierra",
                    "5 veces el tamaño de la Tierra",
                    "0.8 veces el tamaño de la Tierra"
                ],
                "correctAnswer": 1
            },
            {
                "question": "¿Cuál es la distancia entre Kepler 22b y su estrella anfitriona?",
                "resuelta": false,
                "answers": [
                    "0.85 UA",
                    "1.5 UA",
                    "0.5 UA",
                    "0.3 UA"
                ],
                "correctAnswer": 0
            },
            {
                "question": "¿Cuál es la temperatura estimada en la superficie de Kepler 22b?",
                "resuelta": false,
                "answers": [
                    "22°C",
                    "15°C",
                    "-50°C",
                    "100°C"
                ],
                "correctAnswer": 0
            }
        ],
        'Kepler-186f': [
            {
                "question": "¿Qué hace especial a Kepler-186f?",
                "resuelta": false,
                "answers": ["Es el primer planeta del tamaño de la Tierra en la zona habitable", "Es el planeta más caliente descubierto", "Es el planeta más frío descubierto", "Es el planeta más cercano a su estrella"],
                "correctAnswer": 0
            }, {
                "question": "¿Qué tipo de estrella orbita Kepler-186f?",
                "resuelta": false,
                "answers": ["Estrella tipo M (enana roja)", "Estrella tipo G (como el Sol)", "Estrella gigante roja", "Estrella de neutrones"],
                "correctAnswer": 0
            }, {
                "question": "¿A qué distancia está Kepler-186f de su estrella?",
                "resuelta": false,
                "answers": ["1 UA", "0.5 UA", "0.4 UA", "0.75 UA"],
                "correctAnswer": 3
            }, {
                "question": "¿Cuál es la probabilidad de que Kepler-186f tenga agua líquida en su superficie?",
                "resuelta": false,
                "answers": ["Alta", "Media", "Baja", "Desconocida"],
                "correctAnswer": 1
            }, {
                "question": "¿Cuántos días tarda en orbitar Kepler-186f su estrella?",
                "resuelta": false,
                "answers": ["130 días", "365 días", "500 días", "1,000 días"],
                "correctAnswer": 0
            }
        ]
    };

    if (quizId === undefined) {
        return questions;
    }

    return questions[quizId];
}

export default Data;