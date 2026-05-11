class Figura {

    constructor(startX,startY,endX,endY,colorLinea,colorRelleno,grosor) 
    {
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
        this.colorLinea = colorLinea;
        this.colorRelleno = colorRelleno;
        this.grosor = grosor;
    }
}

export class Linea extends Figura {

    Dibujar(ctx) {

        ctx.beginPath();
        ctx.strokeStyle = this.colorLinea;
        ctx.lineWidth = this.grosor;
        ctx.moveTo(this.startX, this.startY);
        ctx.lineTo(this.endX, this.endY);
        ctx.stroke();
    }
}

export class Cuadrado extends Figura {

    Dibujar(ctx) {

        const width = this.endX - this.startX;
        const height = this.endY - this.startY;
        ctx.beginPath();
        ctx.fillStyle = this.colorRelleno;
        ctx.strokeStyle = this.colorLinea;
        ctx.lineWidth = this.grosor;
        ctx.fillRect(this.startX, this.startY, width, height);
        ctx.strokeRect(this.startX, this.startY, width, height);
    }
}

export class Circulo extends Figura {

    Dibujar(ctx) {

        const radius = Math.sqrt(Math.pow(this.endX - this.startX, 2) + Math.pow(this.endY - this.startY, 2));
        ctx.beginPath();
        ctx.fillStyle = this.colorRelleno;
        ctx.strokeStyle = this.colorLinea;
        ctx.lineWidth = this.grosor;
        ctx.arc(this.startX,this.startY, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    }
}


export class Triangulo extends Figura {

    Dibujar(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.colorRelleno;
        ctx.strokeStyle = this.colorLinea;
        ctx.lineWidth = this.grosor;
        ctx.moveTo(this.startX, this.endY);
        ctx.lineTo((this.startX + this.endX) / 2, this.startY);
        ctx.lineTo(this.endX, this.endY);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
}

export class Trazo {

    constructor(puntos, color, grosor) 
    {
        this.puntos = puntos;
        this.color = color;
        this.grosor = grosor;
    }

    Dibujar(ctx) {

        if (this.puntos.length < 2) return;
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.grosor;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.moveTo(this.puntos[0].x, this.puntos[0].y);

        for (let i = 1; i < this.puntos.length; i++) 
        {

            ctx.lineTo(this.puntos[i].x,this.puntos[i].y);
        }

        ctx.stroke();
    }
}