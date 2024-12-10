export const funcaoData = (data: string) => {
    if (!data || typeof data !== "string") {
        console.error("O valor de 'data' é inválido:", data);
        return;
    }

    let [ano, mes, dia] = data.split("-");
    switch (mes) {
        case "01":
            mes = "jan";
            break;
        case "02":
            mes = "feb";
            break;
        case "03":
            mes = "mar";
            break;
        case "04":
            mes = "apr";
            break;
        case "05":
            mes = "may";
            break;
        case "06":
            mes = "jun";
            break;
        case "07":
            mes = "jul";
            break;
        case "08":
            mes = "aug";
            break;
        case "09":
            mes = "sep";
            break;
        case "10":
            mes = "oct";
            break;
        case "11":
            mes = "nov";
            break;
        case "12":
            mes = "dec";
            break;
        default:
            mes = "Invalid month";
            break;
    }
    
    return `${dia} de ${mes} de ${ano}`;
};
