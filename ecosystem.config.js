module.exports = {
	apps: [
		{
			name: "example",
			script: "node_modules/next/dist/bin/next",
			args: "start -p 4000",
			out_file: "./pm2-out.log",
			error_file: "./pm2-err.log",
			max_memory_restart: "4000M",
		},
	],
};
