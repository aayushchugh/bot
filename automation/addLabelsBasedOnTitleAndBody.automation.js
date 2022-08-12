const { addLabel } = require('../helpers/label.helper');
const { listRepoLabels } = require('../helpers/listLabels.helper');

const addLabelsBasedOnTitleAndBody = async context => {
	const { body, title } = context.payload.issue;
	const repoLabels = await listRepoLabels(context);

	if (title) {
		title.split(' ').forEach(word => {
			const foundRepoLabel = repoLabels.data.find(label => label.name === word);

			if (foundRepoLabel) {
				addLabel([word], context);
			}
		});
	}

	if (body) {
		body.split(' ').forEach(word => {
			const foundRepoLabel = repoLabels.data.find(label => label.name === word);

			if (foundRepoLabel) {
				addLabel([word], context);
			}
		});
	}
};

module.exports = addLabelsBasedOnTitleAndBody;
