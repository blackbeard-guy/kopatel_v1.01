

const scriptsInEvents = {

	async Digging_sheet_Event428_Act10(runtime, localVars)
	{

	},

	async Base_sheet_Event124_Act15(runtime, localVars)
	{
		const params = new URLSearchParams(window.location.search);
		let rawName = params.get("name");
		if (rawName) {
		    try {
		        rawName = decodeURIComponent(rawName);
		    } catch (e) {
		        // fallback if decodeURIComponent fails
		        console.warn("Could not decode name, using raw value instead.");
		    }
		    runtime.globalVars.name = rawName;
		}
		
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
