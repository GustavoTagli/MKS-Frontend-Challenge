import { Alert, Snackbar } from "@mui/material"

interface ToastMessageProps {
	open: boolean
	onClose: () => void
	message: string
	severity: "success" | "error" | "warning" | "info"
}

export function ToastMessage({ open, onClose, message, severity }: ToastMessageProps) {
	return (
		<Snackbar open={open} autoHideDuration={4000} onClose={onClose}>
			<Alert
				onClose={onClose}
				severity={severity}
				variant="filled"
				sx={{ width: "100%" }}
			>
				{message}
			</Alert>
		</Snackbar>
	)
}
