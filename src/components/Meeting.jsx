import { InlineWidget } from "react-calendly";

export default function Meeting() {

	return (
		<div className="container mx-auto p-8">
			<InlineWidget url="https://calendly.com/pablo-espinoza" styles={{ height: "760px"}} />
		</div>
	);
}
