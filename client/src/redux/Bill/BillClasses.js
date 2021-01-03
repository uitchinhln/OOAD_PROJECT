export const ReceiptType = {
    BUY: 0,
    HIRE: 1,
    IMPORT: 2,
    RETURN: 3
}

export class Receipt {
    #id = 0;
    #employeeId = 0;
    dateCreate = Date.now();
    bookIdList =  [];
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
}

export class BuyReceipt extends Receipt {
    customerPhone = "";

    constructor(id, employeeId) {
        super(id, employeeId);
    }
}

export class HireReceipt extends Receipt {
    customerPhone = "";
    returnDate = Date.now();
    deposit = 0;

    constructor(id, employeeId) {
        super(id, employeeId);
    }
}

export class ImportReceipt extends Receipt {
    supplierPhone = "";

    constructor(id, employeeId) {
        super(id, employeeId);
    }
}

export class ReturnReceipt extends Receipt {
    hireReceiptId = 0;
    returnDate = Date.now();
    overdueDays = 0;

    constructor(id, employeeId) {
        super(id, employeeId);
    }
}




