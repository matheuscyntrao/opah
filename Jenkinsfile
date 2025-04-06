pipeline {
    agent any

    environment {
        NODE_VERSION = '18.x'
        ANDROID_SDK_ROOT = '/path/to/android/sdk' 
        JAVA_HOME = '/path/to/java'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Setup Environment') {
            steps {
                sh 'nvm install ${NODE_VERSION}'
                sh 'nvm use ${NODE_VERSION}'
                sh 'node -v'

                withEnv(["ANDROID_SDK_ROOT=${ANDROID_SDK_ROOT}", "JAVA_HOME=${JAVA_HOME}"]) {
                    sh 'echo "Android SDK Root: ${ANDROID_SDK_ROOT}"'
                    sh 'echo "Java Home: ${JAVA_HOME}"'
                }

                sh 'npm install' 
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    try {
                        sh 'npx wdio run android_cucumber_androidstudiodevice_specreporter_appium.conf'
                    } catch (e) {
                        echo "Testes falharam: ${e}"
                        currentBuild.result = 'FAILURE'
                        throw e 
                    }
                }
            }
        }

        stage('Post-Build Actions') {
            steps {
                echo 'Verificando a saída do console para resultados dos testes (spec reporter)'
            }
        }
    }

    post {
        always {
            echo 'Finalizando o Pipeline'
            
        }
        success {
            echo 'Pipeline executado com sucesso'
            
        }
        failure {
            echo 'Pipeline falhou'
            
        }
    }
}
