pipeline {
    agent any

    stages {
        stage('SonarQube Analysis') {
            environment {
                SONAR_SCANNER_HOME = tool 'sonarqube'  // Utilise l'outil configuré dans Jenkins
            }
            steps {
                withSonarQubeEnv('sonarqube') {  // Le nom 'SonarQube' est celui que tu as configuré dans Jenkins
                    sh '''
                    ${SONAR_SCANNER_HOME}/bin/sonar-scanner \
                      -Dsonar.projectKey=Digiliberte-front \
                      -Dsonar.sources=src \
                      -Dsonar.host.url=http://localhost:9000 \
                      -Dsonar.login=sonarqube
                    '''
                }
            }
        }

        stage('Docker Steps') {
            agent {
                docker {
                    image 'node:18'  // Une image Docker avec Node.js
                    args '-u root -v /var/www/html:/var/www/html'  // Monte un volume du système hôte
                }
            }

            stages {
                stage('Install Chromium') {
                    steps {
                        sh '''
                        apt-get update
                        apt-get install -y chromium
                        '''
                    }
                }

                stage('Install Dependencies') {
                    steps {
                        sh 'npm install --omit=dev'
                    }
                }

                stage('Run Tests') {
                    steps {
                        sh 'CHROME_BIN=$(which chromium) npm run test -- --watch=false --no-progress'
                    }
                }

                stage('Build') {
                    steps {
                        sh 'npm run build --prod'
                    }
                }

                stage('Deploy') {
                    steps {
                        sh 'cp -r dist/ /var/www/html/'  // Copie les fichiers dans le volume monté
                    }
                }
            }
        }
    }

    post {
        always {
            cleanWs()  // Nettoie l'espace de travail après chaque exécution
        }
        success {
            echo 'Le pipeline Angular a été exécuté avec succès.'
        }
        failure {
            echo 'Le pipeline Angular a échoué.'
        }
    }
}
