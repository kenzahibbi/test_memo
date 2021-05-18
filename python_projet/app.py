from flask import Flask, render_template, request
import random
import operator

app = Flask(__name__)
count = 0
def randomCalc():
  global resul_op
  ops = {'+': operator.add,
         '-': operator.sub,
         '*': operator.mul,
         '/': operator.truediv}
  num1 = random.randint(1, 10)
  num2 = random.randint(1, 10)
  op = random.choice(list(ops.keys()))
  message = 'What is {} {} {}?\n'.format(num1, op, num2)
  resul_op = ops.get(op)(num1, num2)
  return message


@app.route('/')
def index():
  return render_template('index.html')

@app.route('/authentification',methods = ['POST'])
def authentification():
  global message
  result = request.form
  #Initialisation des données
  n = result['nom']
  p = result['prenom']
  e = result['mail']
  # Verification des données entré
  if n == "" or p == "" or e == "":
    message = "Un élement est vide, verifier bien svp vos données "
    return render_template('index.html', message=message)
  message = randomCalc()
  return render_template("resultat.html", nom=n, prenom=p, mail=e, message=message)

@app.route('/verification',methods = ['POST'])
def verfication():
  global count
  while (1):
    val = request.form
    res = float(val['res'])
    if res == resul_op:
      msg = "Felicitation vous avez la bonne réponse aprés " + str(count) + " essaies"
      count = 1
      return render_template("resultat.html", verification=msg)
    else:
      count = count + 1
      if count == 5:
        count = 1
        break
      return render_template("resultat.html", message=message)
  return render_template("index.html", message="Vous avez  terminé les 5 essai")
app.run(debug=True)