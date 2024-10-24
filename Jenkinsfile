pipeline {
    agent any

    stages {
        stage('SonarQube Analysis') {
            environment {
                SONAR_SCANNER_HOME = tool 'sonarqubeScanner'  // Utilise l'outil configuré dans Jenkins
            }
            steps {
                echo '=== Début de l\'analyse SonarQube ==='
                withSonarQubeEnv('sonarqube') {  // Le nom 'sonarqube' est celui que tu as configuré dans Jenkins
                sh '''
                echo "Lancement de SonarQube Scanner"
                ${SONAR_SCANNER_HOME}/bin/sonar-scanner \
                  -Dsonar.projectKey=Digiliberte-front \
                  -Dsonar.sources=src \
                  -Dsonar.host.url=http://localhost:9000 \
                  -Dsonar.login=sqp_45714e06fe45d1c580ab40b47c6ca7fcaf79f984 \
                '''
                }
                echo '=== Fin de l\'analyse SonarQube   ==='
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
                        echo '=== Installation de Chromium dans Docker ==='
                        sh '''
                        apt-get update
                        apt-get install -y chromium
                        '''
                        echo '=== Chromium installé avec succès ==='
                    }
                }

                stage('Install Dependencies') {
                    steps {
                        echo '=== Installation des dépendances via npm ==='
                        sh 'npm install'
                        echo '=== Dépendances installées ==='
                    }
                }

                stage('Run Tests') {
                    steps {
                        echo '=== Lancement des tests avec ChromiumHeadless ==='
                        sh 'CHROME_BIN=$(which chromium) npm run test -- --watch=false --no-progress'
                        echo '=== Tests terminés ==='
                    }
                }

                stage('Build') {
                    steps {
                        echo '=== Génération du build de production Angular ==='
                        sh 'npm run build --prod'
                        echo '=== Build de production généré avec succès ==='
                    }
                }

                stage('Deploy') {
                    steps {
                        echo '=== Déploiement du build dans /var/www/html/ ==='
                        sh 'cp -r dist/ /var/www/html/'
                        echo '=== Déploiement terminé ==='
                    }
                }
            }
        }
    }

    post {
        always {
            echo '=== Nettoyage de l\'espace de travail ==='
            // cleanWs()  // Nettoie l'espace de travail après chaque exécution
        }
        success {
            echo '=== Le pipeline Angular a été exécuté avec succès ==='
        }
        failure {
            echo '=== Le pipeline Angular a échoué ==='
        }
    }
}
