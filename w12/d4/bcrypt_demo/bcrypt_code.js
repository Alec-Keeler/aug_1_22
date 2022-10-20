const bcrypt = require('bcryptjs')

const hashPass = async(password) => {
    const hash = await bcrypt.hash(password, 8)
    console.log(hash)
}

// hashPass('password')

const comparePass = async(password, hash) => {
    const isPass = await bcrypt.compare(password, hash)
    console.log(isPass)
}

// comparePass('password', '')