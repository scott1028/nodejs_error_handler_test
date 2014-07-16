# How to start
	
	npm start

# Use pm2( Daemon Mode )

	pm2 start app.js
	pm2 list

	or

	pm2 start app.js --no-daemon -i max -e err.log -o out.log
	(開發用 non-daemon mode)

# Options

    -h, --help                   output usage information
    -V, --version                output the version number
    -v --verbose                 verbose level
    -s --silent                  hide all messages
    -m --mini-list               display a compacted list without formatting
    -f --force                   force actions
    -n --name <name>             set a <name> for script
    -i --instances <number>      launch [number] (load balanced) instances (for networked app)
    -o --output <path>           specify out log file
    -e --error <path>            specify error log file
    -p --pid <pid>               specify pid file
    -x --execute-command         execute a program using fork system
    -u --user <username>         define user when generating startup script
    -c --cron <cron_pattern>     restart a running process based on a cron pattern
    -w --write                   write configuration in local folder
    --interpreter <interpreter>  the interpreter pm2 should use for executing app (bash, python...)
    --no-daemon                  run pm2 daemon in the foreground if it doesn't exist already
    --merge-logs                 merge logs
    --watch                      watch folder(s) for changes. When `true`, watching all folders from root. Can also be a string or an array of strings for paths to watch for changes.
    --node-args <node_args>      space-delimited arguments to pass to node in cluster mode - e.g. --node-args="--debug=7001 --trace-deprecation"
    --run-as-user <run_as_user>    The user or uid to run a managed process as
    --run-as-group <run_as_group>  The group or gid to run a managed process as
