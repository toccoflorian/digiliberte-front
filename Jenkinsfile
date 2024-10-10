pipeline {
    // agent any

    agent {
        docker {
            image 'node:18' // Une image Docker avec Node et les navigateurs préinstallés
            args '-u root -v /var/www/html:/var/www/html'  // Monte un volume du système hôte
        }
            
    }
    
    stages {
        // stage('Install Chrome') {
        //     steps {
        //         sh '''
        //         apt-get update
        //         apt-get install -y chromium
                
        //         '''
        //     }
        // }
        
        stage('Install Dependencies') {
            steps {
                // Installe les dépendances Angular via npm
                sh 'npm install'
            }
        }

        // stage('Run Tests') {
        //     steps {
        //         sh 'CHROME_BIN=$(which chromium) npm run test -- --watch=false --no-progress'
        //     }
        // }

        stage('Build') {
            steps {
                // Génère la version optimisée pour la production
                sh 'npm run build --prod'
            }
        }

        stage('SonarQube Analysis') {
            environment {
                SONAR_SCANNER_HOME = tool 'SonarQubeScanner' // Utilise l'outil configuré dans Jenkins
            }
            steps {
                withSonarQubeEnv('SonarQube') {  // Le nom 'SonarQube' est celui que tu as configuré dans Jenkins
                    sh '''
                    ${SONAR_SCANNER_HOME}/bin/sonar-scanner \
                      -Dsonar.projectKey=mon-projet-angular \
                      -Dsonar.sources=src \
                      -Dsonar.host.url=http://your-sonarqube-server:9000 \
                      -Dsonar.login=your-sonarqube-token
                    '''
                }
            }
        }

        stage('Deploy') {
            steps {
                sh 'cp -r dist/ /var/www/html/'  // Copie les fichiers dans le volume monté
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
