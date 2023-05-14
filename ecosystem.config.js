module.exports = {
	apps: [
		{
			// basic
			name: "example",
			script: "node_modules/next/dist/bin/next",
			args: "start -p 4000",
			cwd: "./",
			instances: 1,
			exec_mode: "cluster",
			watch: false,
			// log
			out_file: "./pm2-out.log",
			error_file: "./pm2-err.log",
			time: true,
			// restart
			autorestart: true,
			listen_timeout: 10000,
			kill_timeout: 1000,
			restart_delay: 10000,
			max_memory_restart: "4000M",
		},
	],
};