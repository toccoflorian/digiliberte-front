pipeline {
    // agent any

    agent {
        docker {
            image 'circleci/node:latest' // Une image Docker avec Node et les navigateurs préinstallés
            args '-u root'
        }
    }
    stages {
        // stage('Checkout Code') {
        //     steps {
        //         // Récupère le code du dépôt Git
        //         git branch: 'main', url: 'git@github.com:ton-repo/angular-project.git'
        //     }
        // }

        stage('Install Dependencies') {
            steps {
                // Installe les dépendances Angular via npm
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Exécute les tests unitaires Angular
                sh 'npm run test -- --watch=false --no-progress '
            }
        }

        stage('Build') {
            steps {
                // Génère la version optimisée pour la production
                sh 'npm run build -- --prod'
            }
        }

        stage('Deploy') {
            steps {
                // Cette étape peut varier selon l'endroit où tu veux déployer
                // Par exemple, si tu déploies sur un serveur distant via rsync/ssh
                // Adapte cette étape selon tes besoins de déploiement
                sh '''
                echo "Déploiement des fichiers..."
                
                '''
            }
        }
    }

    post {
        always {
            // Nettoie après chaque exécution
            cleanWs()
        }
        success {
            // Si tout se passe bien, envoyer une notification ou autre action
            echo 'Le pipeline Angular a été exécuté avec succès.'
        }
        failure {
            // En cas d'échec
            echo 'Le pipeline Angular a échoué.'
        }
    }
}
