const mongoose = require('mongoose');

const detailsSchema = new mongoose.Schema({
    initials: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    bmi: {
        type: Number,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    factors: {
        alcoholConsumption: {
            isselected: {
                type: Boolean,
                default: false
            }
        },
        tobaccoConsumption: {
            isselected: {
                type: Boolean,
                default: false
            }
        },
        smoking: {
            isselected: {
                type: Boolean,
                default: false
            }
        }
    },
    dietaryHabits: {
        vegetarian: {
            isselected: {
                type: Boolean,
                default: false
            }
        },
        nonvegetarian: {
            isselected: {
                type: Boolean,
                default: false
            }
        }
    },
    atdDate: {
        months: {
            type: Number
        },
        years: {
            type: Number
        }
    },
    dodDate: {
        months: {
            type: Number
        },
        years: {
            type: Number
        }
    },
    medicalCondition: {
        hypertension: {
            isselected: {
                type: Boolean,
                default: false
            }
        },
        dyslipidemia: {
            isselected: {
                type: Boolean,
                default: false
            }
        },
        cad: {
            isselected: {
                type: Boolean,
                default: false
            }
        },
        heartfailure: {
            isselected: {
                type: Boolean,
                default: false
            }
        },
        albuminuria: {
            isselected: {
                type: Boolean,
                default: false
            }
        },
    },
    genericname: {
        type: String
    },
    dose: {
        type: String
    },
    frequency: {
        type: Number
    },
    hba1c: {
        baseline: {
            type: Number
        },
        visit1: {
            type: Number
        },
        visit2: {
            type: Number
        }
    },
    rbs: {
        baseline: {
            type: Number
        },
        visit1: {
            type: Number
        },
        visit2: {
            type: Number
        }
    },
    fbs: {
        baseline: {
            type: Number
        },
        visit1: {
            type: Number
        },
        visit2: {
            type: Number
        }
    },
    pp2bs: {
        baseline: {
            type: Number
        },
        visit1: {
            type: Number
        },
        visit2: {
            type: Number
        }
    },
    medicalcondition: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Details', detailsSchema);
