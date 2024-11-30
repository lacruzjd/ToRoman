function toRoman(n) {

    let numeroRomano = ''

    function descomponerValorPosicional(numero, decimal = 1, numeros = []) {
        if (!numero) {
            return numeros
        } else {
            let digito = ((numero / decimal) % 10) * decimal
            numeros.push({ digito: digito / decimal, decimal: decimal })
            return descomponerValorPosicional(numero - digito, decimal * 10, numeros)
        }
    }

    function generarRomano(numero, decimal) {
        let romanos = {
            1: 'I',
            5: 'V',
            10: 'X',
            50: 'L',
            100: 'C',
            500: 'D',
            1000: 'M',
        }

        let numeroRomano = ''

        numero = numero * decimal

        if (numero === 0) {
            return ''
        }

        if (numero === 4000) {
            let rep = numero / decimal
            while (rep > 0) {
                numeroRomano = numeroRomano + romanos[decimal]
                rep--
            }
            return numeroRomano
        }

        if (numero === decimal) {
            numeroRomano = romanos[decimal]
            return numeroRomano
        }

        if (numero === decimal * 5) {
            numeroRomano = romanos[decimal * 5]
            return numeroRomano
        }



        if (numero === (decimal * 10) - decimal) {
            numeroRomano = romanos[decimal] + romanos[decimal * 10]
            return numeroRomano
        }

        if (numero < (decimal * 5) - decimal) {
            numero = ((decimal * numero) / decimal) / decimal
            while (numero > 0) {
                numeroRomano = numeroRomano + romanos[decimal]
                numero--
            }
            return numeroRomano

        }

        if (numero === (decimal * 5) - decimal) {
            numeroRomano = romanos[decimal] + romanos[decimal * 5]
            return numeroRomano

        }

        if (numero > (decimal * 5) && numero < (decimal * 10) - 1) {
            numeroRomano = romanos[decimal * 5]
            numero = (numero - decimal * 5) / decimal
            while (numero > 0) {
                numeroRomano = numeroRomano + romanos[decimal]
                numero--
            }
            return numeroRomano
        }

    }

    descomponerValorPosicional(n).reverse().forEach(e => {
            return numeroRomano = numeroRomano + generarRomano(e.digito, e.decimal)

    })

    return numeroRomano
}


