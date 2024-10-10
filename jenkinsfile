pipeline{
    agent{
        label "node"
    }
    stages{
        stage("install"){
            steps{
                echo "========Installing...========   "
                npm i
            }
            post{
                success{
                    echo "========Install successfull========"
                }
                failure{
                    echo "========Install fail========"
                }
            }
        }
    }
    post{
        
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}
