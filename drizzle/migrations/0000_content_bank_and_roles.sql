CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  role public.app_role NOT NULL,
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read own roles" ON public.user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE OR REPLACE FUNCTION public.admin_exists()
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin')
$$;

-- First signed-in user may claim admin when no admin exists yet
CREATE OR REPLACE FUNCTION public.claim_first_admin()
RETURNS boolean LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF auth.uid() IS NULL THEN RETURN false; END IF;
  IF EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin') THEN RETURN false; END IF;
  INSERT INTO public.user_roles (user_id, role) VALUES (auth.uid(), 'admin');
  RETURN true;
END $$;
REVOKE EXECUTE ON FUNCTION public.claim_first_admin() FROM anon, public;
GRANT EXECUTE ON FUNCTION public.claim_first_admin() TO authenticated;
GRANT EXECUTE ON FUNCTION public.admin_exists() TO anon, authenticated;

CREATE TABLE public.content_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  level int NOT NULL,
  class_num int NOT NULL,
  type text NOT NULL CHECK (type IN ('sentence','question','vocab')),
  english text NOT NULL,
  spanish text,
  sample_answers text[] NOT NULL DEFAULT '{}',
  category text,
  emoji text,
  tags text[] NOT NULL DEFAULT '{}',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX content_items_level_class_idx ON public.content_items (level, class_num, type);
GRANT SELECT ON public.content_items TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.content_items TO authenticated;
GRANT ALL ON public.content_items TO service_role;
ALTER TABLE public.content_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read content" ON public.content_items FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admins insert content" ON public.content_items FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins update content" ON public.content_items FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins delete content" ON public.content_items FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- ================= SEED =================
-- L1C1 introductions
INSERT INTO public.content_items(level,class_num,type,english,spanish,tags) SELECT 1,1,'sentence',e,s,ARRAY['verb to be – introductions'] FROM (VALUES
('My name is Ana.','Mi nombre es Ana.'),('I am ten years old.','Tengo diez años.'),('I am from Colombia.','Soy de Colombia.'),('She is my friend.','Ella es mi amiga.'),('He is my brother.','Él es mi hermano.'),('We are happy.','Estamos felices.'),('You are very nice.','Eres muy amable.'),('My teacher is funny.','Mi profesor es divertido.'),('I am a student.','Soy estudiante.'),('They are my parents.','Ellos son mis padres.')) v(e,s);
INSERT INTO public.content_items(level,class_num,type,english,sample_answers,tags) SELECT 1,1,'question',q,string_to_array(a,'|'),ARRAY['verb to be – introductions'] FROM (VALUES
('What is your name?','My name is Leo.|I am Sofia.'),('How old are you?','I am nine.|I am eleven years old.'),('Where are you from?','I am from Mexico.|I am from Peru.'),('How are you today?','I am fine, thank you.|I am great!'),('Who is your best friend?','My best friend is Tom.|It is Maria.'),('Are you a student?','Yes, I am.|Yes, I am a student.'),('What is your favorite color?','My favorite color is blue.|It is red.'),('Is your teacher nice?','Yes, she is.|Yes, he is very nice.'),('Who is your hero?','My mom is my hero.|My hero is my dad.'),('What is your last name?','My last name is Garcia.|It is Lopez.')) v(q,a);
INSERT INTO public.content_items(level,class_num,type,english,category,emoji,tags) SELECT 1,1,'vocab',w,c,em,ARRAY['family'] FROM (VALUES
('mom','family','👩'),('dad','family','👨'),('brother','family','👦'),('sister','family','👧'),('grandma','family','👵'),('grandpa','family','👴'),('baby','family','👶'),('friend','people','🤝'),('teacher','people','🧑‍🏫'),('student','people','🎒')) v(w,c,em);

-- L1C2 animals & colors
INSERT INTO public.content_items(level,class_num,type,english,spanish,tags) SELECT 1,2,'sentence',e,s,ARRAY['can – animals'] FROM (VALUES
('A dog can run fast.','Un perro puede correr rápido.'),('A fish can swim.','Un pez puede nadar.'),('A bird can fly.','Un pájaro puede volar.'),('I have a black cat.','Tengo un gato negro.'),('The frog is green.','La rana es verde.'),('A monkey can climb trees.','Un mono puede trepar árboles.'),('I can not fly.','Yo no puedo volar.'),('The elephant is big and gray.','El elefante es grande y gris.'),('My rabbit is white.','Mi conejo es blanco.'),('Lions can roar.','Los leones pueden rugir.')) v(e,s);
INSERT INTO public.content_items(level,class_num,type,english,sample_answers,tags) SELECT 1,2,'question',q,string_to_array(a,'|'),ARRAY['can – animals'] FROM (VALUES
('Can a fish fly?','No, it can not.|No, a fish can swim.'),('Do you have a pet?','Yes, I have a dog.|No, I do not.'),('What color is a banana?','It is yellow.|A banana is yellow.'),('Can you swim?','Yes, I can.|No, I can not.'),('What is your favorite animal?','My favorite animal is the tiger.|I love dogs.'),('What color is the sky?','It is blue.|The sky is blue.'),('Can a dog climb trees?','No, it can not.|No, but a cat can.'),('What animal can jump high?','A kangaroo can jump high.|A frog can jump.'),('What color is your cat?','My cat is orange.|It is black and white.'),('Which animal is very big?','An elephant is very big.|A whale is big.')) v(q,a);
INSERT INTO public.content_items(level,class_num,type,english,category,emoji,tags) SELECT 1,2,'vocab',w,c,em,ARRAY['animals'] FROM (VALUES
('dog','animals','🐶'),('cat','animals','🐱'),('fish','animals','🐟'),('bird','animals','🐦'),('lion','animals','🦁'),('monkey','animals','🐵'),('elephant','animals','🐘'),('frog','animals','🐸'),('rabbit','animals','🐰'),('horse','animals','🐴')) v(w,c,em);

-- L1C3 food likes
INSERT INTO public.content_items(level,class_num,type,english,spanish,tags) SELECT 1,3,'sentence',e,s,ARRAY['like / don''t like – food'] FROM (VALUES
('I like pizza.','Me gusta la pizza.'),('I don''t like onions.','No me gustan las cebollas.'),('She likes apples.','A ella le gustan las manzanas.'),('He doesn''t like milk.','A él no le gusta la leche.'),('We like ice cream.','Nos gusta el helado.'),('I love chocolate.','Me encanta el chocolate.'),('My dad likes coffee.','A mi papá le gusta el café.'),('I eat rice every day.','Como arroz todos los días.'),('Bananas are yummy.','Los bananos son deliciosos.'),('I drink water.','Yo tomo agua.')) v(e,s);
INSERT INTO public.content_items(level,class_num,type,english,sample_answers,tags) SELECT 1,3,'question',q,string_to_array(a,'|'),ARRAY['like / don''t like – food'] FROM (VALUES
('Do you like pizza?','Yes, I do.|No, I don''t.'),('What is your favorite food?','My favorite food is pasta.|I love tacos.'),('Do you like vegetables?','Yes, I like carrots.|No, I don''t like them.'),('What do you drink for breakfast?','I drink milk.|I drink orange juice.'),('Does your mom like coffee?','Yes, she does.|No, she doesn''t.'),('What fruit do you like?','I like mangoes.|I like strawberries.'),('Do you like ice cream?','Yes, I love ice cream!|Yes, I do.'),('What food don''t you like?','I don''t like fish.|I don''t like onions.'),('What do you eat for lunch?','I eat rice and chicken.|I eat soup.'),('Is chocolate sweet?','Yes, it is.|Yes, chocolate is sweet.')) v(q,a);
INSERT INTO public.content_items(level,class_num,type,english,category,emoji,tags) SELECT 1,3,'vocab',w,c,em,ARRAY['food'] FROM (VALUES
('pizza','food','🍕'),('apple','fruit','🍎'),('banana','fruit','🍌'),('bread','food','🍞'),('milk','drinks','🥛'),('cheese','food','🧀'),('carrot','vegetables','🥕'),('ice cream','food','🍦'),('egg','food','🥚'),('juice','drinks','🧃')) v(w,c,em);

-- L2C1 daily routines
INSERT INTO public.content_items(level,class_num,type,english,spanish,tags) SELECT 2,1,'sentence',e,s,ARRAY['present simple – daily routines'] FROM (VALUES
('I wake up at seven.','Me despierto a las siete.'),('I brush my teeth every morning.','Me cepillo los dientes cada mañana.'),('She goes to school by bus.','Ella va a la escuela en bus.'),('He eats breakfast at home.','Él desayuna en casa.'),('We do homework after school.','Hacemos la tarea después de clase.'),('I take a shower at night.','Me ducho en la noche.'),('My sister reads before bed.','Mi hermana lee antes de dormir.'),('I go to bed at nine.','Me acuesto a las nueve.'),('They play soccer on Saturdays.','Ellos juegan fútbol los sábados.'),('My dad cooks dinner.','Mi papá cocina la cena.')) v(e,s);
INSERT INTO public.content_items(level,class_num,type,english,sample_answers,tags) SELECT 2,1,'question',q,string_to_array(a,'|'),ARRAY['present simple – daily routines'] FROM (VALUES
('What time do you wake up?','I wake up at six thirty.|I wake up at seven.'),('How do you go to school?','I go by car.|I walk to school.'),('What do you eat for breakfast?','I eat eggs and bread.|I eat cereal.'),('When do you do your homework?','I do it after lunch.|I do it in the afternoon.'),('What do you do on weekends?','I play video games.|I visit my grandma.'),('What time do you go to bed?','I go to bed at nine.|At ten o''clock.'),('Who cooks dinner at your house?','My mom cooks dinner.|My grandma cooks.'),('Do you take a shower in the morning?','Yes, I do.|No, I take a shower at night.'),('What does your mom do in the morning?','She drinks coffee.|She goes to work.'),('How often do you play sports?','I play every day.|Twice a week.')) v(q,a);
INSERT INTO public.content_items(level,class_num,type,english,category,emoji,tags) SELECT 2,1,'vocab',w,c,em,ARRAY['daily routines'] FROM (VALUES
('wake up','routines','⏰'),('brush teeth','routines','🪥'),('take a shower','routines','🚿'),('get dressed','routines','👕'),('have breakfast','routines','🥣'),('go to school','routines','🏫'),('do homework','routines','📚'),('have dinner','routines','🍽️'),('go to bed','routines','🛏️'),('watch TV','routines','📺')) v(w,c,em);

-- L2C2 house & places
INSERT INTO public.content_items(level,class_num,type,english,spanish,tags) SELECT 2,2,'sentence',e,s,ARRAY['there is / there are – house'] FROM (VALUES
('There is a sofa in the living room.','Hay un sofá en la sala.'),('There are two bedrooms in my house.','Hay dos habitaciones en mi casa.'),('There is a cat under the table.','Hay un gato debajo de la mesa.'),('There are books on the shelf.','Hay libros en el estante.'),('There isn''t a garden.','No hay jardín.'),('My bed is next to the window.','Mi cama está al lado de la ventana.'),('The fridge is in the kitchen.','La nevera está en la cocina.'),('There are three chairs.','Hay tres sillas.'),('The lamp is on the desk.','La lámpara está en el escritorio.'),('There is a big mirror in the bathroom.','Hay un espejo grande en el baño.')) v(e,s);
INSERT INTO public.content_items(level,class_num,type,english,sample_answers,tags) SELECT 2,2,'question',q,string_to_array(a,'|'),ARRAY['there is / there are – house'] FROM (VALUES
('How many bedrooms are there in your house?','There are three bedrooms.|There are two.'),('Is there a garden in your house?','Yes, there is.|No, there isn''t.'),('What is there in your bedroom?','There is a bed and a desk.|There are toys.'),('Where is your TV?','It is in the living room.|It is in my bedroom.'),('Is there a pet in your house?','Yes, there is a dog.|No, there isn''t.'),('What is in the kitchen?','There is a fridge.|There is a stove.'),('Where do you do your homework?','In my bedroom.|At the kitchen table.'),('How many windows are there in your room?','There is one window.|There are two windows.'),('What is your favorite room?','My bedroom.|The living room.'),('Is there a park near your house?','Yes, there is.|No, there isn''t.')) v(q,a);
INSERT INTO public.content_items(level,class_num,type,english,category,emoji,tags) SELECT 2,2,'vocab',w,c,em,ARRAY['house'] FROM (VALUES
('bed','furniture','🛏️'),('sofa','furniture','🛋️'),('chair','furniture','🪑'),('door','house','🚪'),('window','house','🪟'),('kitchen','rooms','🍳'),('bathroom','rooms','🛁'),('lamp','furniture','💡'),('mirror','furniture','🪞'),('house','house','🏠')) v(w,c,em);

-- L2C3 clothes & weather
INSERT INTO public.content_items(level,class_num,type,english,spanish,tags) SELECT 2,3,'sentence',e,s,ARRAY['present continuous – clothes & weather'] FROM (VALUES
('It is raining today.','Está lloviendo hoy.'),('I am wearing a red jacket.','Llevo puesta una chaqueta roja.'),('She is wearing a hat.','Ella lleva un sombrero.'),('It is sunny and hot.','Está soleado y hace calor.'),('They are playing in the snow.','Ellos están jugando en la nieve.'),('He is wearing blue jeans.','Él lleva jeans azules.'),('It is very windy.','Hace mucho viento.'),('I am wearing my new shoes.','Llevo mis zapatos nuevos.'),('We are wearing sweaters.','Llevamos suéteres.'),('It is cold in the morning.','Hace frío en la mañana.')) v(e,s);
INSERT INTO public.content_items(level,class_num,type,english,sample_answers,tags) SELECT 2,3,'question',q,string_to_array(a,'|'),ARRAY['present continuous – clothes & weather'] FROM (VALUES
('What are you wearing today?','I am wearing a T-shirt.|I am wearing a dress.'),('What is the weather like today?','It is sunny.|It is cloudy.'),('What do you wear when it is cold?','I wear a jacket.|I wear a sweater and a scarf.'),('Is it raining now?','Yes, it is.|No, it isn''t.'),('What is your favorite season?','I like summer.|Winter is my favorite.'),('What color are your shoes?','They are white.|My shoes are black.'),('What do you wear to the beach?','I wear shorts.|I wear a swimsuit.'),('Do you like rainy days?','Yes, I do.|No, I don''t.'),('What is your teacher wearing?','She is wearing glasses.|He is wearing a shirt.'),('What do you need when it rains?','I need an umbrella.|I need boots.')) v(q,a);
INSERT INTO public.content_items(level,class_num,type,english,category,emoji,tags) SELECT 2,3,'vocab',w,c,em,ARRAY['clothes','weather'] FROM (VALUES
('T-shirt','clothes','👕'),('jeans','clothes','👖'),('dress','clothes','👗'),('hat','clothes','🎩'),('shoes','clothes','👟'),('jacket','clothes','🧥'),('sunny','weather','☀️'),('rainy','weather','🌧️'),('snowy','weather','❄️'),('windy','weather','💨')) v(w,c,em);

-- L3C1 past holidays
INSERT INTO public.content_items(level,class_num,type,english,spanish,tags) SELECT 3,1,'sentence',e,s,ARRAY['past simple – holidays'] FROM (VALUES
('I went to the beach last summer.','Fui a la playa el verano pasado.'),('We visited my grandparents.','Visitamos a mis abuelos.'),('She swam in the sea.','Ella nadó en el mar.'),('I ate a big ice cream.','Me comí un helado grande.'),('We stayed in a hotel.','Nos quedamos en un hotel.'),('My brother played volleyball.','Mi hermano jugó voleibol.'),('I took a lot of photos.','Tomé muchas fotos.'),('We traveled by plane.','Viajamos en avión.'),('It was a great trip.','Fue un viaje genial.'),('I didn''t go to school last week.','No fui a la escuela la semana pasada.')) v(e,s);
INSERT INTO public.content_items(level,class_num,type,english,sample_answers,tags) SELECT 3,1,'question',q,string_to_array(a,'|'),ARRAY['past simple – holidays'] FROM (VALUES
('Where did you go on your last holiday?','I went to the mountains.|I went to Cartagena.'),('What did you do yesterday?','I played with my friends.|I watched a movie.'),('What did you eat for dinner last night?','I ate pasta.|I had chicken and rice.'),('Did you travel last year?','Yes, I did.|No, I didn''t.'),('Who did you visit last weekend?','I visited my cousins.|I visited my grandma.'),('How did you travel?','We traveled by car.|By plane.'),('What was the best part of your trip?','Swimming in the pool.|Seeing the animals.'),('Did you take photos?','Yes, I took many photos.|No, I didn''t.'),('What did you buy?','I bought a toy.|I bought a T-shirt.'),('How was your weekend?','It was fun!|It was boring.')) v(q,a);
INSERT INTO public.content_items(level,class_num,type,english,category,emoji,tags) SELECT 3,1,'vocab',w,c,em,ARRAY['holidays'] FROM (VALUES
('beach','places','🏖️'),('mountain','places','⛰️'),('plane','transport','✈️'),('suitcase','travel','🧳'),('hotel','places','🏨'),('camera','travel','📷'),('ticket','travel','🎫'),('passport','travel','🛂'),('tent','travel','⛺'),('map','travel','🗺️')) v(w,c,em);

-- L3C2 comparisons
INSERT INTO public.content_items(level,class_num,type,english,spanish,tags) SELECT 3,2,'sentence',e,s,ARRAY['comparatives – animals & things'] FROM (VALUES
('An elephant is bigger than a horse.','Un elefante es más grande que un caballo.'),('A cheetah is faster than a lion.','Un guepardo es más rápido que un león.'),('My sister is taller than me.','Mi hermana es más alta que yo.'),('Summer is hotter than winter.','El verano es más caliente que el invierno.'),('A mouse is smaller than a cat.','Un ratón es más pequeño que un gato.'),('This book is more interesting than that one.','Este libro es más interesante que ese.'),('A turtle is slower than a rabbit.','Una tortuga es más lenta que un conejo.'),('Math is easier than science for me.','Las matemáticas son más fáciles que las ciencias para mí.'),('The blue whale is the biggest animal.','La ballena azul es el animal más grande.'),('My dog is older than my cat.','Mi perro es mayor que mi gato.')) v(e,s);
INSERT INTO public.content_items(level,class_num,type,english,sample_answers,tags) SELECT 3,2,'question',q,string_to_array(a,'|'),ARRAY['comparatives – animals & things'] FROM (VALUES
('Which is bigger, a dog or a mouse?','A dog is bigger.|A dog is bigger than a mouse.'),('Who is taller, you or your mom?','My mom is taller.|I am taller than my mom.'),('Which is faster, a car or a bike?','A car is faster.|A car is faster than a bike.'),('Which is colder, ice or water?','Ice is colder.|Ice is colder than water.'),('Which animal is the biggest?','The blue whale.|The whale is the biggest.'),('Which is more fun, math or art?','Art is more fun.|Math is more fun for me.'),('Who is older, you or your best friend?','I am older.|My friend is older than me.'),('Which is heavier, a book or a pencil?','A book is heavier.|A book is heavier than a pencil.'),('Which is better, summer or winter?','Summer is better.|Winter is better.'),('What is the fastest animal?','The cheetah.|The cheetah is the fastest.')) v(q,a);
INSERT INTO public.content_items(level,class_num,type,english,category,emoji,tags) SELECT 3,2,'vocab',w,c,em,ARRAY['adjectives'] FROM (VALUES
('big','adjectives','🐘'),('small','adjectives','🐭'),('fast','adjectives','🐆'),('slow','adjectives','🐢'),('tall','adjectives','🦒'),('short','adjectives','📏'),('heavy','adjectives','🏋️'),('light','adjectives','🪶'),('hot','adjectives','🔥'),('cold','adjectives','🧊')) v(w,c,em);

-- L3C3 future plans
INSERT INTO public.content_items(level,class_num,type,english,spanish,tags) SELECT 3,3,'sentence',e,s,ARRAY['going to – future plans'] FROM (VALUES
('I am going to visit my cousin.','Voy a visitar a mi primo.'),('We are going to play soccer tomorrow.','Vamos a jugar fútbol mañana.'),('She is going to be a doctor.','Ella va a ser doctora.'),('I am going to learn to swim.','Voy a aprender a nadar.'),('They are going to watch a movie.','Ellos van a ver una película.'),('He is going to buy a new bike.','Él va a comprar una bicicleta nueva.'),('I am not going to sleep late.','No voy a dormir tarde.'),('We are going to have a party.','Vamos a tener una fiesta.'),('My mom is going to cook pasta.','Mi mamá va a cocinar pasta.'),('I am going to read a book tonight.','Voy a leer un libro esta noche.')) v(e,s);
INSERT INTO public.content_items(level,class_num,type,english,sample_answers,tags) SELECT 3,3,'question',q,string_to_array(a,'|'),ARRAY['going to – future plans'] FROM (VALUES
('What are you going to do this weekend?','I am going to play games.|I am going to visit my aunt.'),('What are you going to be when you grow up?','I am going to be a pilot.|I am going to be a vet.'),('Are you going to watch TV tonight?','Yes, I am.|No, I am not.'),('What are you going to eat for dinner?','I am going to eat pizza.|Soup and bread.'),('Where are you going to go on vacation?','I am going to go to the beach.|To Bogotá.'),('Who are you going to see tomorrow?','I am going to see my friends.|My grandpa.'),('What are you going to learn next year?','I am going to learn guitar.|French.'),('Are you going to have a party?','Yes, for my birthday!|No, I am not.'),('What game are you going to play?','I am going to play Minecraft.|Hide and seek.'),('What time are you going to sleep?','At nine o''clock.|I am going to sleep at ten.')) v(q,a);
INSERT INTO public.content_items(level,class_num,type,english,category,emoji,tags) SELECT 3,3,'vocab',w,c,em,ARRAY['jobs'] FROM (VALUES
('doctor','jobs','🩺'),('pilot','jobs','👨‍✈️'),('teacher','jobs','🧑‍🏫'),('chef','jobs','👨‍🍳'),('police officer','jobs','👮'),('firefighter','jobs','🧑‍🚒'),('astronaut','jobs','🧑‍🚀'),('farmer','jobs','🧑‍🌾'),('artist','jobs','🎨'),('vet','jobs','🐾')) v(w,c,em);