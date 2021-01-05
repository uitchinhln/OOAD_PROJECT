export const ReceiptType = {
    LOBBY: 0,
    BUY: 1,
    HIRE: 2,
    IMPORT: 3,
    RETURN: 4
}

export class Receipt {
    #id = 0;
    #employeeId = 0;
    dateCreate = Date.now();
    books = [];
    total = 0;
    status = 0;

    cashed = 0;

    constructor(id, employeeId) {
        this.#id = id;
        this.#employeeId = employeeId;
    }

    get Id() {
        return this.#id;
    }

    get employeeId() {
        return this.#employeeId;
    }

    get getReceiptType() {
        return ReceiptType.LOBBY;
    }
}

export class BuyReceipt extends Receipt {
    customerPhone = "";

    constructor(id, employeeId) {
        super(id, employeeId);
    }

    get getReceiptType() {
        return ReceiptType.BUY;
    }
}

export class HireReceipt extends Receipt {
    customerPhone = "";
    returnDate = Date.now();
    deposit = 0;

    constructor(id, employeeId) {
        super(id, employeeId);
    }

    get getReceiptType() {
        return ReceiptType.HIRE;
    }
}

export class ImportReceipt extends Receipt {
    supplierPhone = "";

    constructor(id, employeeId) {
        super(id, employeeId);
    }

    get getReceiptType() {
        return ReceiptType.IMPORT;
    }
}

export class ReturnReceipt extends Receipt {
    hireReceiptId = 0;
    returnDate = Date.now();
    overdueDays = 0;

    constructor(id, employeeId) {
        super(id, employeeId);
    }

    get getReceiptType() {
        return ReceiptType.RETURN;
    }
}




