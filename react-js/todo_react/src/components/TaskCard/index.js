import Swal from "sweetalert2";
import { destroy} from "../../services"

function TaskCard(props) {
	const { task, updateTask, getTasks } = props;
  
	const statusClass = {
	  1: "",
	  2: "bg-success",
	  3: "bg-danger",
	};

	async function createAlert (text){
		const res = await Swal.fire({
			title: "Importante",
			text,
			showCancelButton: true,
			showConfirmButton: true,
		})
		return res.isConfirmed;
	}

	 async function confirmUpdate() {
		const isConfirmed= await createAlert("Esta segurro que desea Actualizar")

		if (isConfirmed) {
			await updateTask(task.id)
		}
	}

	async function confirmDelete() {
		const isConfirmed= await createAlert("Esta segurro que desea Eliminar")

		if (isConfirmed) {
			await destroy(task.id);
			await getTasks();
		}
	}


  
	return (
	  <div
		className={`mt-3 card p-3 mt-3 shadow-sm bg-opacity-75 ${
		  statusClass[task.status]
		}`}
	  >
		<div className="d-flex">
		  {task.status === 1 && (
			<span className="me-3">
			  <button
				onClick={() => updateTask(task.id)}
				className="btn btn-sm btn-outline-primary py-0 small opacity-50 checkButton"
			  >
				✓
			  </button>
			</span>
		  )}
		  <span>{task.name}</span>
		</div>
		<hr className="border border-muted border-1" />
		{task.status === 1 && (
		  <div className="d-flex justify-content-between">
			<span className="text-muted small">{String(task.createdAt)}</span>
			<span>
			  <button
			 onClick={confirmUpdate} 
			  className="btn btn-sm btn-outline-secondary py-0 small opacity-50">
				✎
			  </button>
			  <button 
			 onClick={confirmDelete}  
			  className="btn btn-sm btn-outline-danger py-0 small opacity-50 deleteButton">
				×
			  </button>
			</span>
		  </div>
		)}
	  </div>
	);
  }
  
  export default TaskCard;