const bcrypt = require('bcryptjs')

const hashPass = async(password) => {
    const hash = await bcrypt.hash(password, 12)
    console.log(hash)
}

// hashPass('password')

const comparePass = async(password, hash) => {
    const isPass = await bcrypt.compare(password, hash)
    console.log(isPass)
}

comparePass('password', '$2a$1$W4ypapQgzyPzzVGKjdYkeOqZah0VPuqAh/mXHuMih06LLtWSpybCe')

// $2a + $08 + $R9h/cIPz0gi.URNNX3kh2OP = ST9/PgBkqquzi.Ss7KIUgO2t0jWMUW
// \__/\/ \____________________/\_____________________________/
// Alg Cost      Salt 22chars                  Hash