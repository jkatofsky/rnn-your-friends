if [ -z "$1" ]; then
    echo "ERROR: you must supply a project name"
    exit 1
fi

npm run build

gcloud config set project $1

echo "mkdir $1" | gcloud alpha cloud-shell ssh

gcloud alpha cloud-shell scp --recurse \
    localhost:./build localhost:./app.yaml cloudshell:~/$1

remote_commands="
    gcloud config set project $1;
    cd $1;
    gcloud app deploy;
"

echo $remote_commands | gcloud alpha cloud-shell ssh
