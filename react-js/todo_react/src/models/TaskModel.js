export class TaskModel {
    // id: Object ID
    // name: String
    // createdAt: String
    // doneAt: String
    // deletedAt: String

    constructor(
        _id = null,
        _name = null,
        _createdAt = null,
        _doneAt = null,
        _deletedAt = null
    ) {// se le envia 2 parametros de agregar tareas el 1ª es null porque le envia un id nulo a mockapi y mockapi le asignara und id
        // el 2ª le envia un texto en este caso si se cumple con la condicion 
        if (_id !== null) this.id = _id;
        if (_name !== null) this.name = _name;
        this.createdAt = 
               _createdAt === null ? new Date() : new Date(_createdAt);
        this.doneAt = _doneAt === null ? null : new Date(_doneAt);
        this.deletedAt = _deletedAt === null ? null : new Date(_deletedAt);
    }

    timeElapsed(date) {
		let timeDiff = new Date() - date; //in ms
		// strip the ms
		timeDiff /= 1000;

		if (timeDiff > 3600) {
			// get hours
			return "Hace " + Math.round(timeDiff / 3600) + "+ hrs.";
		}

		if (timeDiff > 60) {
			// get seconds
			return "Hace " + Math.round(timeDiff / 60) + " min.";
		}

		// get seconds
		return "Hace " + Math.round(timeDiff) + " seg.";
	}

	getDateTimeString(date) {
		return (
			String(date.toLocaleDateString()) +
			" " +
			String(date.toLocaleTimeString())
		);
	}timeElapsed(date) {
		let timeDiff = new Date() - date; //in ms
		// strip the ms
		timeDiff /= 1000;

		if (timeDiff > 3600) {
			// get hours
			return "Hace " + Math.round(timeDiff / 3600) + "+ hrs.";
		}

		if (timeDiff > 60) {
			// get seconds
			return "Hace " + Math.round(timeDiff / 60) + " min.";
		}

		// get seconds
		return "Hace " + Math.round(timeDiff) + " seg.";
	}

	getDateTimeString(date) {
		return (
			String(date.toLocaleDateString()) +
			" " +
			String(date.toLocaleTimeString())
		);
	}
}